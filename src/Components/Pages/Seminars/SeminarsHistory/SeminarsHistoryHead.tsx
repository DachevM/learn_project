import React, { useState} from 'react';
import {Button, FormControl, InputAdornment, MenuItem, Select, TextField} from "@mui/material";
import {SearchSharp} from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {Link} from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {theme} from "../../../../Customization/Customization";
import {ThemeProvider} from "@emotion/react";
import "./seminarsHistory.css"
import Modal from "../../../UI/PopUP/Modal";
import SeminarsHistoryAdd from "./SeminarsHistoryAdd";
import {IHistory} from "../../../../types/types";
interface HistoryHeadProps {
    search:string
    pages:number
    setSearch:(value:string)=>void
    history:IHistory[]
    setPages:(value:number)=>void
    setLimit:(value:number)=>void
    total:()=>number
    setHistory:(value:IHistory[])=>void
}

const SeminarsHistoryHead = ({search, setSearch,setLimit,setPages,pages,total,setHistory,history}:HistoryHeadProps) => {
    const [menu,setMenu]=useState("5")
    const [show,setShow]= useState<boolean>(false)
    const searchEmpty = () => {
        setSearch("")
    }
    const pagesPlus = () => {
        setPages(pages + 1)
    }
    const pagesMinus = () => {
        setPages(pages - 1)
    }
    const limitChange5 = () => {
        setLimit(5)
    }
    const limitChange10 = () => {
        setLimit(10)
    }
    const limitChange15 = () => {
        setLimit(15)
    }



    return (
        <div className={"seminarsHistory_head"}>
            <div>
                <TextField
                    size={"small"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth={false}
                    className={"seminarsHistory_search_inp"}
                    placeholder={'Поиск по семинарам'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SearchSharp/>
                            </InputAdornment>

                        ),
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <ClearOutlinedIcon onClick={searchEmpty} fontSize={"small"}/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className={"seminarsHistory_head_bottom"}>
                <div className={"seminarsHistory_link"}>
                    <Link className={"link"} to={"/seminars/future"}>Будущие</Link>
                    <Link className={"link"} to={"/seminars/history"}>История</Link>
                    <Link className={"link"} to={"/seminars/request"}>Заявки на семинары</Link>
                </div>
                <div className={"seminarsHistory_pages"}>
                    Показывать
                    <FormControl className={"menu"} sx={{ margin:"15px"}} size="small">
                        <Select
                            displayEmpty
                            id="demo-select-small"
                            value={menu}
                            onChange={(e)=>setMenu(e.target.value)}
                        >
                            <MenuItem disabled value="5">
                                <em style={{color: "#737680"}}></em>
                            </MenuItem>
                            <MenuItem onClick={limitChange5} value={5}>5</MenuItem>
                            <MenuItem onClick={limitChange10} value={10}>10</MenuItem>
                            <MenuItem onClick={limitChange15} value={15}>15</MenuItem>
                        </Select>
                    </FormControl>
                    Страница
                    <button disabled={true} className={"seminarsHistory_pages_butt"}>{pages}</button>
                    из {total()}
                    <button onClick={pagesMinus}  className={"seminarsHistory_pages_arrow1"}>
                        <KeyboardArrowLeftOutlinedIcon fontSize={"small"}/>
                    </button>
                    <button onClick={pagesPlus}  className={"seminarsHistory_pages_arrow2"}>
                        <KeyboardArrowRightOutlinedIcon fontSize={"small"}/>
                    </button>
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <Button onClick={()=>setShow(true)} fullWidth={true} variant="contained">Добавить семинар</Button>
            </ThemeProvider>
            <Modal show={show} setShow={setShow}><SeminarsHistoryAdd setShow={setShow} setHistory={setHistory} history={history}/></Modal>
        </div>
    );
};

export default SeminarsHistoryHead;