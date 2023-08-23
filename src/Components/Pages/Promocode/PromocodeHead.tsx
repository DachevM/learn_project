import React, { useState} from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import {Button} from "@mui/material";
import "./promocode.css"
import Modal from "../../UI/PopUP/Modal";
import PromocodeAdd from "./PromocodeAdd";
import {IPromocode} from "../../../types/types";

interface HeadProps {
    promocode:IPromocode[]
    setPromocode:(value: IPromocode[])=>void
}

const PromocodeHead = ({promocode,setPromocode}:HeadProps) => {
    const [show,setShow]= useState<boolean>(false)
    return (
        <div className={"promocode_head"}>
            <ThemeProvider theme={theme}>
                <Button onClick={()=> setShow(true)} fullWidth={true} variant="contained">Добавить промокод</Button>
            </ThemeProvider>
            <Modal show={show} setShow={setShow}><PromocodeAdd setPromocode={setPromocode} promocode={promocode} setShow={setShow} /></Modal>
        </div>
    );
};

export default PromocodeHead;