import {CategoriesEnum, CategoryAction, ICat} from "../types/categories";
import {ICategory} from "../../types/types";


const CategoryState: ICat = {
    category: [],
}

export const categoriesReducer = (state = CategoryState, action: CategoryAction):ICat => {
    switch (action.type) {
        case CategoriesEnum.FETCH_CAT:
            return {...state, category: action.payload}
        case CategoriesEnum.SET_CAT:
            return {...state, category: state.category.filter((e:ICategory)=>e.id !== action.payload.id)}
        case CategoriesEnum.ADD_CAT:
            return {...state, category:[...state.category, action.payload] }
        default:
            return state
    }
}