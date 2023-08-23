import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Redux/hooks";
import {fetchProducts, setLimit, setPages} from "../Redux/action-creators/productsAction";

const SERVER_URL = "http://localhost:5005/products2"
 const Test = () => {
     const {pages,limit,products,totalPages}=useAppSelector(state =>state.product )
     const dispatch=useAppDispatch()
     useEffect(() => {
         dispatch(fetchProducts(SERVER_URL,pages,limit)) // remove args
     }, [dispatch, limit, pages])
     console.log(totalPages)
    return (
        <div>
            {/*{search}*/}
            {/*<input type={"text"} value={search} onChange={add}/>*/}
            {products.map((e:any)=> <div key={e.id}>{e.name}</div>)}
            <button onClick={()=>dispatch(setLimit(4))}>ascasc</button>
            <button onClick={()=>dispatch(setPages(1))}>pagesasc</button>
        </div>
    );
};

export default Test;