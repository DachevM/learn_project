import React from 'react';
import "./brands.css"
import BrandsItem from "./BrandsItem";
import { IBrands} from "../../../types/types";


interface BrandsBodyProps {
    brands:IBrands[]
    setBrands:(v:IBrands[])=>void
}

const BrandsList= ({brands,setBrands}:BrandsBodyProps) => {

    return (
        <div className={"brands_body"}>
            <div className={"brands_body_head"}>
                <div className={"brands_body_left_head"}>Логотип бренда</div>
                <div className={"brands_body_right_head"}>Название бренда</div>
            </div>
            { brands.length
                ?
                <div className={"brands_body_layout"}>
                    {brands.map((brand:any)=>
                        <BrandsItem key={brand.id} brands={brands} setBrands={setBrands} brand={brand}/>
                    )}
                </div>
                :
                <p>Здесь пока нет брендов</p>
            }

        </div>
    );
};

export default BrandsList;