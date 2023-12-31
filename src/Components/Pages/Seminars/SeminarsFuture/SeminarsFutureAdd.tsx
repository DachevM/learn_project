import React, { useState} from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../../Customization/Customization";
import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import {IFuture} from "../../../../types/types";
interface FutureAdd{
    future:IFuture[]
    setFuture: (value: IFuture []) => void
    setShow: (value: boolean) => void
}

const SeminarsFutureAdd = ({future,setFuture,setShow}:FutureAdd) => {
    const [categ, setCateg] = useState('');
    const [name,setName]=useState("")
    const [speaker,setSpeaker]=useState("")
    const [description,setDescription]=useState("")
    const [speaker_speciality,setSpeaker_speciality]=useState("")
    const [date,setDate]=useState("")
    const [time,setTime]=useState("")

    const newSeminarFutureAdd = () => {
        const newSeminarFuture={
            name:name,
            speaker:speaker,
            description:description,
            speaker_speciality:speaker_speciality,
            datetime: date + " " + time,
            id:String(Date.now()),
            image:"",
            mobileImage:"",

        }
        setFuture([...future,newSeminarFuture])
        setSpeaker("")
        setDate("")
        setTime("")
        setName("")
        setDescription("")
        setSpeaker_speciality("")
        setShow(false)
    }
    const closeModal = () => {
        setShow(false)
    }

    return (
        <div className={"seminars_add"}>
            <div className={"seminars_add_head"}>
                <ThemeProvider theme={theme}>
                    <Button sx={{marginRight:"15px"}} onClick={closeModal} fullWidth={true} size={'medium'} variant={"outlined"}> Удалить </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button onClick={newSeminarFutureAdd} fullWidth={true} size={'medium'} variant={"contained"}> Сохранить </Button>
                </ThemeProvider>
            </div>
            <div className={"seminars_add_body"}>
                <div className={"edit_descr"}>
                    <label form={"outlined-basic"}>Название*</label>
                    <TextField
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        sx={{marginBottom: "15px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Напишите название семинара"} variant="outlined"/>
                    <label form={"outlined-basic"}>Описание*</label>
                    <TextField
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        sx={{marginBottom: "15px"}}
                        fullWidth={true}
                        size={"medium"} id="outlined-basic"
                        placeholder={"Опишите семинар"} variant="outlined"/>
                    <label form={"outlined-basic"}>Спикер*</label>
                    <TextField
                        value={speaker}
                        onChange={(e)=>setSpeaker(e.target.value)}
                        sx={{marginBottom: "40px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Напишите имя спикера"} variant="outlined"/>
                    <label form={"outlined-basic"}>Специальность спикера*</label>
                    <TextField
                        value={speaker_speciality}
                        onChange={(e)=>setSpeaker_speciality(e.target.value)}
                        sx={{marginBottom: "40px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Напишите имя спикера"} variant="outlined"/>
                    <label form={"demo-select-smal"}>Город*</label>
                    <FormControl sx={{marginBottom: "20px"}} fullWidth={true} size="small">
                        <Select
                            displayEmpty
                            id="demo-select-small"
                            value={categ}
                            onChange={(e) => setCateg(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                <em style={{color: "#737680"}}>Выберите город</em>
                            </MenuItem>
                            <MenuItem>Волгоград</MenuItem>
                            <MenuItem>Сочи</MenuItem>
                            <MenuItem>Краснодар</MenuItem>
                            <MenuItem>Архангельск</MenuItem>
                        </Select>
                    </FormControl>
                    <div className={"seminar_time"}>
                        <TextField
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            sx={{marginRight: "20px"}}
                            fullWidth={true}
                            size={"small"} id="outlined-basic"
                            placeholder={"Выберите дату"} variant="outlined"/>
                        <TextField
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            fullWidth={true}
                            size={"small"} id="outlined-basic"
                            placeholder={"Выберите время"} variant="outlined"/>
                    </div>
                    <div><TextField
                        fullWidth={true}
                        className={"editInp"}
                        size={"small"} id="outlined-basic"
                        placeholder={"Вставьте ссылку на Google Drive"} variant="outlined"/> </div>
                    <p>Размер фото 750х730 px PNG, JPG, JPEG</p>
                </div>

            </div>
        </div>
    );
};

export default SeminarsFutureAdd;