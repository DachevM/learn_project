export enum ProductsEnum {
    FETCH_PROD = "FETCH_PROD",
    FILTERED = "FILTERED",
    SET_PAGES = "SET_PAGES",
    SET_LIMIT = "SET_LIMIT",
    TOTAL_PAGES = "TOTAL_PAGES"
}

export interface ProdAction {
    type: ProductsEnum
    payload: any
}

export interface IProd {
    productsFiltered: any
    products: any
    pages: number
    limit: number
    totalPages:number
}
