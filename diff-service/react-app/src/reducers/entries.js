import {ADD_ENTRIES, CLEAR_ENTRIES} from "../constants/ActionTypes";

const initialState = [];

function addEntry(state, newEntry) {
    let found = state.find(entry => entry.id === newEntry.id);

    return found ? state : [...state, newEntry];
}

export default function entries(state = initialState, action) {
    switch (action.type) {
        case ADD_ENTRIES: {
            let newState = [...state];
            for (let i = 0; i < action.entries.length; i++) {
                newState = addEntry(newState, action.entries[i]);
            }
            return newState;
        }
        case CLEAR_ENTRIES: {
            return initialState;
        }
        default:
            return state;
    }
}
