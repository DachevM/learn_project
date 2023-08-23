import {IBrands} from "../../types/types";

export enum BrandsEnum {
    FETCH_BRAND = "FETCH_BRAND",
    FETCH_BRAND_ADD = "FETCH_BRAND_ADD",

}

export interface IBrandAction {
    type: BrandsEnum
    payload: any
}

export interface IBrandState {

    brands: IBrands[]

}
