import React, { useEffect, useState} from 'react';
import "./categories.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Categories from "./Categories";
import Subcategories from "./Subcategories";
import {ICategory, ISubCategory} from "../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../Redux/hooks";
import {fetchCat} from "../../../Redux/action-creators/categoryAction";
import {fetchSub} from "../../../Redux/action-creators/subcategoryAction";

const CategoriesMain = () => {
    const categories=useAppSelector(state => state.category.category)
    const subcategories=useAppSelector(state => state.subcategory.subcategory)
    const [selected, setSelected] = useState<(null | ICategory)>(null);
    const filtered = selected
        ? subcategories.filter((e:ISubCategory) => e.position === selected.position)
        : [];
const dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(fetchCat())
        dispatch(fetchSub())
    }, [])

    return (
        <div className={"categories_main"}>
            <Categories setSelected={setSelected} categories={categories} />
            <div><KeyboardDoubleArrowRightIcon/></div>
            {selected
                ?
                <Subcategories filtered={filtered}/>
                :
                <p className={'choose_categ'}>Выберите категорию</p>}
        </div>
    );
};

export default CategoriesMain;