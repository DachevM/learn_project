import React, {useEffect} from 'react';
import "./search.css"
import {useAppDispatch} from "../../../Redux/hooks";
import {searchCases} from "../../../Redux/types/search";
import {useNavigate} from "react-router-dom";
import {useToolkitDispatch} from "../../../RTK/hooksRTK";
import {searchSlice} from "../../../RTK/reducers/searchReducerRtk";


interface ISearchProps {
    search: string,

}

const Search = ({search}:ISearchProps) => {
    // const dispatch=useAppDispatch()
    // const history = useNavigate();
    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch({type:searchCases.SEARCH,payload:e.target.value})
    // }
    // const searchEmpty = ()=>{
    //     dispatch({type:searchCases.CLEAN,payload:""})
    // }
    // useEffect(() => {
    //     return () => {
    //         dispatch({type:searchCases.CLEAN,payload:""})
    //     };
    // }, [history]);
    const dispatch= useToolkitDispatch()
    const {searchMod,searchClean}=searchSlice.actions
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchMod(e.target.value))
    }
    const searchEmpty = ()=>{
        dispatch(searchClean())
    }
    return (
        <div className={"search_form"}>
            <input value={search}
                   onChange={handleChange} type={"text"} placeholder={"Поиск по товарам"}
                   className={"search_input"}/>
            <button onClick={searchEmpty} className={"search_form_button"}></button>
        </div>
    );
};

export default Search;