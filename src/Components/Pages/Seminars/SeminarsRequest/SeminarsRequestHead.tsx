import React, {useState} from 'react';
import {FormControl, InputAdornment, MenuItem, Select, TextField} from "@mui/material";
import {SearchSharp} from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {Link} from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./seminarsRequest.css"
interface RequestHeadProps {
    search:string
    pages:number
    setSearch:(value:string)=>void
    setLimit:(value:number)=>void
    setPages:(value:number)=>void
    total:()=>number

}


const SeminarsRequestHead = ({search,setSearch,setLimit,setPages,pages,total}:RequestHeadProps) => {
    const [menu,setMenu]=useState("5")

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
        <div className={"seminarsRequest_head"}>
            <div>
                <TextField
                    size={"small"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth={false}
                    className={"seminarsRequest_search_inp"}
                    placeholder={'Поиск по семинарам'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SearchSharp/>
                            </InputAdornment>

                        ),
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <ClearOutlinedIcon fontSize={"small"}/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className={"seminarsRequest_head_bottom"}>
                <div className={"seminarsRequest_link"}>
                    <Link className={"link"} to={"/seminars/future"}>Будущие</Link>
                    <Link className={"link"} to={"/seminars/history"}>История</Link>
                    <Link className={"link"} to={"/seminars/request"}>Заявки на семинары</Link>
                </div>
                <div className={"seminarsRequest_pages"}>
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
                    <button disabled={true} className={"seminarsRequest_pages_butt"}>{pages}</button>
                    из {total()}
                    <button onClick={pagesMinus}  className={"seminarsRequest_pages_arrow1"}>
                        <KeyboardArrowLeftOutlinedIcon fontSize={"small"}/>
                    </button>
                    <button onClick={pagesPlus}  className={"seminarsRequest_pages_arrow2"}>
                        <KeyboardArrowRightOutlinedIcon fontSize={"small"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeminarsRequestHead;