import axios from "axios";
import {orderSlice} from "../reducers/orderReduce";
import {createAsyncThunk} from "@reduxjs/toolkit";

const SERVER = "http://localhost:5005/orders"
// export const fetchOrders=(page:number,limit:number):any=>async (dispatch:ToolkitDispatch)=>{
//     try {
//
//         dispatch(orderSlice.actions.orderFetch(response.data))
//         dispatch(orderSlice.actions.setTotal(response.headers["x-total-count"]))
//     }catch (e) {
//         console.log(e)
//     }
// }



export const fetchOrders = createAsyncThunk(
    "order/fetch",
    async (param: { page: number, limit: number }, thunkAPI) => {
        return new Promise((resolve) => {
            setTimeout(async () => {
                const response = await axios.get(SERVER, {
                    params: { _limit: param.limit, _page: param.page },
                });
                resolve(response.data);
            }, 1000); // Задержка в 2 секунды
        });
    }
);

export const fetchTotal = createAsyncThunk(
    "total/fetch",
    async (param: { page:number, limit: number },thunkAPI) => {
        const response = await axios.get(SERVER,{
            params:{
                _limit:param.limit,
                _page:param.page
            }
        })
        return response.headers["x-total-count"]
    }
)

export const setPage = (page: number) => {
    return orderSlice.actions.setPage(page)
}

export const setLim = (limit: number) => {
    return orderSlice.actions.setLim(limit)
}

export const orderFilter = (search: string) => {
    return orderSlice.actions.ordersFilt(search)
}