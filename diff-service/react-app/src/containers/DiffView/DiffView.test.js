import React from 'react';
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store'
import {MemoryRouter} from 'react-router-dom'
import DiffView from './DiffView';

Enzyme.configure({adapter: new Adapter()});

describe('DiffSelect container tests', () => {
    const mockStore = configureStore();

    const createWrapper = (store) => {
        spyOn(store, 'dispatch');
        const location = {
            location: {
                params: {
                    left: {"some-key": "some-left-value"},
                    right: {"some-key": "some-right-value"}
                }
            }
        };

        return mount(
            <MemoryRouter>
                <DiffView store={store} location={location}/>
            </MemoryRouter>
        )
    };

    it('', () => {
        const entries = [];
        const store = mockStore({entries: entries});
        const wrapper = createWrapper(store);
    })
});