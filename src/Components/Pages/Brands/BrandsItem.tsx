import React, { useState} from 'react';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteModal from "../../UI/PopUP/DeleteModal";
import DeleteBrand from "./DeleteBrand";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IBrands} from "../../../types/types";
import {Img} from "../../../images/Img";

interface BrandsListProps {
    brands:IBrands[]
    setBrands:(value:IBrands[])=>void
    brand:IBrands

}

const BrandsItem= ({brand,setBrands,brands}:BrandsListProps) => {
    const [show, setShow]=useState<boolean>(false)
    const removeBrand = (brand:IBrands) => {
        setBrands(brands.filter(e=>e.id !== brand.id))
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }
    return (
        <div key={brand.id} className={"brands_body_brands"}>
            <div className={"brands_body_left_brands"}><div className={"brands_image"}><ImageOutlinedIcon fontSize={"large"}/></div> </div>
            <div className={"brands_body_right_brands"}>{brand.name}
                <div> <img className={"brands_pen"} src={Img.pen} alt={""} />
                    <img className={"brands_trash"} src={Img.trash} alt={""} onClick={showModal}/></div>
                {show && <DeleteModal show={show} setShow={setShow}><DeleteBrand setShow={setShow} brand={brand}
                                                                                 removeBrand={removeBrand}/></DeleteModal>}
            </div>
        </div>
    );
};

export default BrandsItem;