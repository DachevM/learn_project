import {createSlice} from "@reduxjs/toolkit";

interface ISearchState {
    search: string
}

const orderState: ISearchState = {
    search: ""
}

interface SearchAction {
    payload: any
}

export const searchSlice = createSlice({
    name: "search",
    initialState: orderState,
    reducers: {
        searchMod(state, action: SearchAction) {
            state.search = action.payload
        },
        searchClean(state) {
            state.search = ""
        },

    }
})

export default searchSlice.reducer