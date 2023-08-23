import { Dispatch} from "redux";
import axios from "axios";
import { ISubCategory} from "../../types/types";
import {SubcategoriesEnum, SubcategoryAction} from "../types/subcategory";



const SERVER_SUB = "http://localhost:5005/subcategories"
export const fetchSub = ():any=> {
    return async (dispatch: Dispatch<SubcategoryAction>)=>{
        try {
            const response = await axios.get<ISubCategory[]>(SERVER_SUB)
            dispatch({type:SubcategoriesEnum.FETCH_SUB, payload:response.data})
        }catch (e) {
            console.log(e)
        }
    }
}

export const removeSub = (subcategory:ISubCategory) => {
    return   {type:SubcategoriesEnum.SET_SUB, payload:subcategory}
}

export const addCategory = (subcategory:ISubCategory) => {
    return {type:SubcategoriesEnum.ADD_SUB, payload:subcategory}
}
