import { Dispatch} from "redux";
import axios from "axios";
import {ICategory, ISubCategory} from "../../types/types";
import {CategoriesEnum, CategoryAction} from "../types/categories";



const SERVER = "http://localhost:5005/categories"
export const fetchCat = ():any=> {
    return async (dispatch: Dispatch<CategoryAction>)=>{
        try {
            const response = await axios.get<ISubCategory[]>(SERVER)
            dispatch({type:CategoriesEnum.FETCH_CAT, payload:response.data})
        }catch (e) {
            console.log(e)
        }
    }
}
export const remove = (category:ICategory) => {
   return   {type:CategoriesEnum.SET_CAT, payload:category}
 }

 export const addCategory = (newCategories:ICategory) => {
    return {type:CategoriesEnum.ADD_CAT, payload:newCategories}
}
