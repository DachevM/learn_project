import {IProd, ProdAction, ProductsEnum} from "../types/products";
import {IProducts} from "../../types/types";


const ProductState: IProd = {
    products: [],
    productsFiltered: [],
    pages: 1,
    limit:5,
    totalPages:0
}

export const productsReducer = (state = ProductState, action: ProdAction):IProd => {
    switch (action.type) {
        case ProductsEnum.FETCH_PROD:
            return {...state, products: action.payload,productsFiltered:action.payload}
        case ProductsEnum.FILTERED:
            return {...state, productsFiltered: [...state.products].filter((el: IProducts) => el.name.toLowerCase().includes(action.payload.toLowerCase())) }
        case ProductsEnum.SET_PAGES:
            return {...state,pages: action.payload}
        case ProductsEnum.SET_LIMIT:
            return {...state,limit: action.payload}
        case ProductsEnum.TOTAL_PAGES:
            return {...state,totalPages: action.payload}
        default:
            return state
    }
}