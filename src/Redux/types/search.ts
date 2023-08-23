export enum searchCases {
    SEARCH = "SEARCH",
    CLEAN = "CLEAN"
}

export interface SearchAction {
    type: searchCases
    payload: string
}

export interface ISearch {
    text: string
}