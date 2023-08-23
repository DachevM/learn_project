import React from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import {Button} from "@mui/material";
import "./brands.css"
import {IBrands} from "../../../types/types";

interface DeleteBrandProps {
    setShow: (value: boolean) => void
    brand:IBrands
    removeBrand:(v:IBrands)=>void
}

const DeleteBrand = ({brand, removeBrand, setShow}:DeleteBrandProps) => {
    const closeModal = () => {
        setShow(false)
    }
    return (
        <div className={"delete_brand"}>
            <div>Вы действительно хотите удалить бренд?</div>
            <div className={"delete_brand_name"}>{brand.name}</div>
            <ThemeProvider theme={theme}>
                <Button sx={{marginBottom: "20px"}} onClick={() => removeBrand(brand)} fullWidth={true}
                        variant="contained">Удалить бренд</Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Button onClick={closeModal} fullWidth={true} variant="text">Отменить удаление</Button>
            </ThemeProvider>
        </div>
    );
};

export default DeleteBrand;