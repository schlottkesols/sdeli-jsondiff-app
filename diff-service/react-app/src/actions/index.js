import {ActionTypes} from "../constants";

export const addEntries = entries => ({type: ActionTypes.ADD_ENTRIES, entries});
export const clearEntries = () => ({type: ActionTypes.CLEAR_ENTRIES});
