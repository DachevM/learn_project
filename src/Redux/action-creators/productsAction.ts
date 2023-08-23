import {Dispatch} from "redux";
import {ProdAction, ProductsEnum} from "../types/products";
import axios from "axios";
import {IProducts} from "../../types/types";


export const fetchProducts = (server:string,pages:number,limit:number):any=> {
  return async (dispatch: Dispatch<ProdAction>)=>{
      try {
          const response = await axios.get<IProducts[]>(server,{
              params: {
                  _limit: limit,
                  _page: pages
              }
          })
          dispatch({type:ProductsEnum.FETCH_PROD, payload:response.data})
          dispatch({type:ProductsEnum.TOTAL_PAGES, payload:response.headers["x-total-count"]})
      }catch (e) {
          console.log(e)
      }
  }
}

export function setPages(page:number):ProdAction {
    return {type:ProductsEnum.SET_PAGES, payload:page}
}

export function setLimit(limit:number):ProdAction {
    return {type:ProductsEnum.SET_LIMIT, payload:limit}
}

export function filter(search:string):ProdAction{
     return {type:ProductsEnum.FILTERED, payload:search}
}