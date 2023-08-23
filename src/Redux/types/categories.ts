export enum CategoriesEnum {
    FETCH_CAT = "FETCH_CAT",
    SET_CAT = "SET_CAT",
    ADD_CAT = "ADD_CAT",
}

export interface CategoryAction {
    type: "FETCH_CAT" | "SET_CAT" | "ADD_CAT"
    payload: any
}

export interface ICat {
    category: any

}
