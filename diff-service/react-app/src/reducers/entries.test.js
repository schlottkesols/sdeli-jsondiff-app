import entries from './entries.js'
import {addEntries, clearEntries} from "../actions";

describe('entries reducer tests', () => {
    let initialState, entryArray;

    beforeEach(() => {
        initialState = [];
        entryArray = entryArray = [
            {id: 1, entryId: 1, key: 'value'},
            {id: 2, entryId: 1, key: 'value'},
            {id: 3, entryId: 1, key: 'value'}
        ];
    });

    it('should add all entries to the state', () => {
        const action = addEntries(entryArray);
        const newState = entries(initialState, action);
        expect(newState.length).toBe(3);
        expect(newState).toContain(entryArray[0]);
        expect(newState).toContain(entryArray[1]);
        expect(newState).toContain(entryArray[2]);
    });

    it('should only add the entries with unique ids', () => {
        entryArray[1].id = 1;

        const action = addEntries(entryArray);
        const newState = entries(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(entryArray[0]);
        expect(newState).toContain(entryArray[2]);
    });

    it('should clear all entries', () => {
        const action = clearEntries();
        const newState = entries(entryArray, action);
        expect(newState.length).toBe(0);
    });

    it('should return the original state if the action is not recognized', () => {
        const action = () => {};
        const newState = entries(entryArray, action);
        expect(newState.length).toBe(3);
    });
});
