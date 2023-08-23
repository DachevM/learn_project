import React, {ChangeEvent, useState} from 'react';
import "./products.css"
import ProductsItem from "./ProductsItem";
import {IProducts} from "../../../types/types";
import CountModal from "../../UI/PopUP/CountModal";

interface ListProps {
    searched: IProducts[]

}

const ProductsList = ({searched}:ListProps) => {

    const [selectedItems, setSelectedItems] = useState<(string[])>([])
    const [showModalCount, setModalCount] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const isSelected = e.target.checked
        const value = e.target.value
        if (isSelected) {
            setSelectedItems([...selectedItems, value])
        } else {
            setSelectedItems((prevData) => {
                return prevData.filter((id) => {
                    return id !== value
                })
            })
        }
    }
    const checkAllHandler = () => {
        if (searched.length === selectedItems.length) {
            setSelectedItems([])

        } else {
            const postIds = searched.map((item:IProducts) => {
                return item.id
            })
            setSelectedItems(postIds)

        }
    }

    const showCount = () => {
        setCheckAll(!checkAll)
        setModalCount(true)

    }

    return (
        <div className={"products_body"}>
            <div className={"products_descr"}>
                <div className={"products_name"}>
                    <label className={"label"}>
                        <input type={"checkbox"} checked={checkAll} onClick={showCount}  onChange={checkAllHandler} className={"products_checkbox"}/>
                            <span className={"fake"}></span>
                        <span className={"text"}>Название продукта</span>
                    </label>
                </div>
                <span className={"products_article"}>Артикул</span>
            </div>
            {searched.length !== 0
                ?
                <div className={"products_body_products"}>
                    {searched.map((elem) =>
                        <>
                        <ProductsItem setModalCount={setModalCount} setSelectedItems={setSelectedItems}
                                      checkboxHandler={checkboxHandler}
                                      selectedItems={selectedItems} key={elem.id} product={elem}/>
                            {showModalCount && <CountModal
                                setCheckAll={setCheckAll}
                                setSelectedItems={setSelectedItems}
                                show={showModalCount}
                                setShow={setModalCount}
                                number={selectedItems.length}/>}
                        </>
                    )}
                </div>
                :
                <p>Здесь пока нет товаров</p>
            }
        </div>
    );
}

export default ProductsList;

