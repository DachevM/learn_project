export enum ClientsEnum {
    FETCH_CLIENT = "FETCH_CLIENT",
    SET_PAGES = "SET_PAGES",
    SET_LIMIT = "SET_LIMIT",
    TOTAL_PAGES = "TOTAL_PAGES"
}

export interface ClientAction {
    type: "FETCH_CLIENT" | "SET_PAGES" | "SET_LIMIT" | "TOTAL_PAGES"
    payload: any
}

export interface IClient {
    clients: any
    pages: number
    limit: number
    totalPages:number
}
