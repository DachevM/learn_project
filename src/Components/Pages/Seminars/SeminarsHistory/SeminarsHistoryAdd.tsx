import React, {FC, useState} from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../../Customization/Customization";
import {Button, TextField} from "@mui/material";
import {IHistory} from "../../../../types/types";
interface HistoryAddProps {
    history:IHistory[]
    setShow:(value:boolean)=>void
    setHistory:(v:IHistory[])=>void

}

const SeminarsHistoryAdd:FC<HistoryAddProps> = ({history, setHistory, setShow}) => {
    const [name,setName]=useState<string>("")
    const [date,setDate]=useState<string>("")
    const newSeminarHistoryAdd = () => {

        const newSeminarHistory={
            description: "",
            image:"",
            mobileImage:"",
            name:name,
            date:date,
            id:String(Date.now())
        }
        setHistory([...history,newSeminarHistory])
        setName("")
        setDate("")
        setShow(false)
    }
    return (
        <div className={"seminars_add"}>
            <div className={"seminars_add_head"}>
                <ThemeProvider theme={theme}>
                    <Button sx={{marginRight:"15px"}} onClick={()=>setShow(false)} fullWidth={true} size={'medium'} variant={"outlined"}> Удалить </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button onClick={newSeminarHistoryAdd} fullWidth={true} size={'medium'} variant={"contained"}> Сохранить </Button>
                </ThemeProvider>
            </div>
            <div className={"seminars_add_body"}>
                <div className={"edit_descr"}>
                    <label form={"outlined-basic"}>Название*</label>
                    <TextField
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        sx={{marginBottom: "20px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Название семинара"} variant="outlined"/>
                    <label form={"outlined-basic"}>Описание</label>
                    <TextField
                        sx={{marginBottom: "20px"}}
                        fullWidth={true}
                        size={"medium"} id="outlined-basic"
                        placeholder={"Опишите семинар"} variant="outlined"/>

                    <label form={"outlined-basic"}> Дата</label>
                    <TextField
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        sx={{marginBottom: "20px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Выберите дату"} variant="outlined"/>
                    <label form={"outlined-basic"}>Фото</label>
                    <TextField
                        sx={{marginBottom: "40px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Вставьте ссылку на Google Drive"} variant="outlined"/>
                </div>
            </div>
        </div>
    );
};

export default SeminarsHistoryAdd;