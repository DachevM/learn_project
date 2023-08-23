export enum SubcategoriesEnum {
    FETCH_SUB = "FETCH_SUB",
    SET_SUB = "SET_SUB",
    ADD_SUB = "ADD_SUB",
}

export interface SubcategoryAction {
    type: "FETCH_SUB" | "SET_SUB" | "ADD_SUB"
    payload: any
}

export interface ISub {
    subcategory: any

}
