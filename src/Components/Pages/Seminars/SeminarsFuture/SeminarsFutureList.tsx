import React, {ChangeEvent, useState} from 'react';
import "./seminarsFuture.css"
import {Button, Checkbox, FormControlLabel, ThemeProvider} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {IFuture} from "../../../../types/types";
import Modal from "../../../UI/PopUP/Modal";
import SeminarsFutureAdd from "./SeminarsFutureAdd";
import {theme} from "../../../../Customization/Customization";
import {Link} from "react-router-dom";
interface FutureBody{
    searchedSeminarsFuture:IFuture[]
    future:IFuture[]
    setFuture:(v:IFuture[])=>void
}
const SeminarsFutureList = ({searchedSeminarsFuture, future, setFuture}:FutureBody) => {
    const [show, setShow] = useState<boolean>(false)

    const removeSeminar = (seminar:IFuture) => {
        return setFuture(future.filter(e => e.id !== seminar.id))
    }
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const checkboxHandler = (e:ChangeEvent<HTMLInputElement>) => {
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
        if (future.length === selectedItems.length) {
            setSelectedItems([])
        } else {
            const seminarsIds = future.map((item) => {
                return item.id
            })
            setSelectedItems(seminarsIds)
        }
    }

    return (
        <div className={"seminarsFutureBody"}>
            <div className={"seminarsFuture_link"}>
                <Link className={"link"} to={"/seminars/future"}>Будущие</Link>
                <Link className={"link"} to={"/seminars/history"}>История</Link>
                <Link className={"link"} to={"/seminars/request"}>Заявки на семинары</Link>
            </div>
            <div className={"seminarsFuture_butt"}>
            <ThemeProvider theme={theme}>
                <Button onClick={() => setShow(true)} fullWidth={true} variant="contained">Добавить семинар</Button>
            </ThemeProvider>
            <Modal show={show} setShow={setShow}><SeminarsFutureAdd setShow={setShow} setFuture={setFuture}
                                                                    future={future}/></Modal>
            </div>
            <div className={"seminarsFuture_descr"}>
                <FormControlLabel  label={""} control={<Checkbox onClick={checkAllHandler} size={"small"}/>}/>
                <p className={"seminarsFuture_name"}>Название</p>
                <p className={"seminarsFuture_speaker"}>Спикер</p>
                <p className={"seminarsFuture_date"}>Дата</p>
            </div>

            <div className={"seminarsFuture_seminars"}>
                {
                    searchedSeminarsFuture.length !== 0
                        ?
                        <>
                            {searchedSeminarsFuture.map((elem) =>
                                <div key={elem.id} className={"seminarsFuture_section"}>
                                    <FormControlLabel control={<Checkbox onChange={checkboxHandler} checked={selectedItems.includes(elem.id)} value={elem.id} size={"small"}/>} label={""}/>
                                    <div className={"seminarsFuture_name"}>{elem.name}</div>
                                    <div className={"seminarsFuture_speaker"}>{elem.speaker}</div>
                                    <div className={"seminarsFuture_date"}>{elem.datetime}<DeleteOutlineOutlinedIcon
                                        onClick={() => removeSeminar(elem)} cursor={"pointer"}/></div>
                                </div>
                            )}
                        </>
                        :
                        <p>Здесь пока нет семинаров</p>
                }

            </div>
        </div>
    );
};

export default SeminarsFutureList;