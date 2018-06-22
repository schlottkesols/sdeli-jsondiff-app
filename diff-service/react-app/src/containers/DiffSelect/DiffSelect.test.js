import React from 'react';
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store'
import {MemoryRouter} from 'react-router-dom'
import DiffSelect from './DiffSelect';
import {EntryService} from "../../services";

Enzyme.configure({adapter: new Adapter()});

describe('DiffSelect container tests', () => {
    const mockStore = configureStore();

    const createWrapper = (store) => {
        spyOn(store, 'dispatch');
        return mount(
            <MemoryRouter>
                <DiffSelect store={store}/>
            </MemoryRouter>
        )
    };

    it('', () => {
        const entries = [];
        const store = mockStore({entries: entries});
        spyOn(EntryService, 'getAll').and.callFake(() => {
            return {
                then: () => {
                    return {
                        catch: () => {

                        }
                    }
                }
            }
        });
        const wrapper = createWrapper(store);

        const buttons = wrapper.find('button');
        const searchButton = buttons.first();
        searchButton.simulate('click');
        expect(EntryService.getAll).toHaveBeenCalled();
    })
});