import React, {FC, useState} from 'react';
import {Button} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import "./banners.css"
import Modal from "../../UI/PopUP/Modal";
import BannerAdd from "./BannerAdd";
import {IBanners} from "../../../types/types";
interface HeadProps {
    banners:IBanners[]
    setBanners:(v:IBanners[])=>void
}
const BannersHead = ({banners,setBanners}: HeadProps) => {
    const [show,setShow]=useState<boolean>(false)
    const showModal = () => {
        setShow(true)
    }
    return (
        <div className={"banners_head"}>

            <button className={"banners_head_butt"} onClick={showModal} >Добавить баннер</button>
            {show &&<Modal show={show} setShow={setShow}><BannerAdd banners={banners} setBanners={setBanners}
                                                                    setShow={setShow}/></Modal>}
        </div>
    );
};

export default BannersHead;