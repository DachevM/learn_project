import React from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import {Button} from "@mui/material";
import {ICities} from "../../../types/types";
import "./cities.css"

interface DeleteCityProps {
    setShow: (value: boolean) => void
    city:ICities
    removeCity:(v:ICities)=>void
}

const DeleteCity = ({city, removeCity, setShow}:DeleteCityProps) => {
    const closeModal = () => {
        setShow(false)
    }
    return (
        <div className={"сity_delete"}>
            <div>Вы действительно хотите удалить город?</div>
            <div className={"city_name_delete"}>{city.name}</div>
            <ThemeProvider theme={theme}>
                <Button sx={{marginBottom: "20px"}} onClick={() => removeCity(city)} fullWidth={true}
                        variant="contained">Удалить город</Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Button onClick={closeModal} fullWidth={true} variant="text">Отменить удаление</Button>
            </ThemeProvider>
        </div>
    );
};

export default DeleteCity;