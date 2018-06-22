import EntryService from './EntryService.js';
import axios from "axios";

describe('EntryService tests', () => {
    it('should get all entries', () => {
        let endpoint = '';
        spyOn(axios, 'get').and.callFake((arg) => {
            endpoint = arg;
        });

        EntryService.getAll("some-id");

        expect(endpoint).toBe("/entries/some-id");
    });
});