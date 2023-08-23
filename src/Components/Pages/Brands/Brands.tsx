import React, { useEffect, useState} from 'react';
import BrandsHead from "./BrandsHead";
import BrandsList from "./BrandsList";
import "./brands.css"
import axios from "axios";

import {IBrands} from "../../../types/types";
const SERVER = "http://localhost:5005/brands"

const Brands = () => {
    const [brands, setBrands] = useState<IBrands[]>([])
    const fetching = async () => {
        const response = await axios.get<IBrands[]>(SERVER)

        setBrands(response.data)
        console.log(response.headers)
    }
    useEffect(() => {
            fetching().then()
        },
        [])
      
    return (
        <div className={"brands_main"}>
            <BrandsHead brands={brands} setBrands={setBrands}/>
            <BrandsList brands={brands} setBrands={setBrands}/>
        </div>
    );
};

export default Brands;