import React, {FC, useState} from 'react';

import "./brands.css"
import {IBrands} from "../../../types/types";

interface BrandsHeadProps {
    brands: IBrands[]
    setBrands:(v:IBrands[])=>void
}

const BrandsHead:FC<BrandsHeadProps> = ({setBrands, brands}) => {
    const [name, setName] = useState<string>("")
    const [icon, setIcon] = useState<string>("")

    const newBrandAdd = () => {
        const newBrand = {
            name: name,
            icon: icon,
            margin:0,
            id:String(Date.now())
        }
        setBrands([...brands, newBrand])
        setName("")
        setIcon("")
    }


    return (
        <div className={"brands_head"}>
            <input value={name}
                   onChange={(e) => setName(e.target.value)} type={"text"}
                   placeholder={"Введите название бренда"} className={"brands_head_inp"}/>
            <input  value={icon}
                    onChange={(e) => setIcon(e.target.value)} type={"text"}
                    placeholder={"Загрузите логотип бренда"} className={"brands_head_inp"}/>
            <button className={"brands_head_butt"} onClick={newBrandAdd}>Добавить бренд</button>
        </div>
    );
};

export default BrandsHead;