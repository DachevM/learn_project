import React, { useMemo, useState} from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import {Button, InputAdornment, TextField} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./protocol.css"
import {SearchSharp} from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {IProtocol} from "../../../types/types";
import {Img} from "../../../images/Img";
interface ProtocolAddProps {
    filtered: IProtocol[]
    protocols: IProtocol[]
    setShow:(value:boolean)=>void
    setProtocols:(v: IProtocol[])=>void
}


const ProtocolAdd= ({filtered,setShow,setProtocols,protocols}:ProtocolAddProps) => {
    const [name,setName]=useState<string>("")
    const [brand,setBrand]=useState<string>("")
    const [description,setDescription]=useState<string>("")
    const [search, setSearch] = useState<string>("")

    const searchedProd = useMemo(() => {
        return filtered.map(elem => elem.products.filter((e)=>
            e.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])


    const newProtocolAdd = () => {
        const newProtocol: IProtocol={
            name:name,
            protocol_category:{
                id:"a23e5f4c-6718-4cd0-8328-f4a93a96df22",
                name:"Для жирной кожи"
            },
            brand:{
                id: "",
                name:brand
            },
            description:description,
            id: Date.now() + "",
            isRetailAllowed: false,
            products:[]
        }
        setProtocols([...protocols,newProtocol])
        setShow(false)
    }
    const searchEmpty = () => {
        setSearch("")
    }



    return (
        <div className={"protocol_add"}>
            <div className={"protocol_add_head"}>
                <button onClick={newProtocolAdd} className={"protocol_butt_save"}>Сохранить</button>
            </div>
            <div className={"protocol_add_body"}>
                <label form={"outlined-basic"}>Название*</label>
                <input type={"text"}
                       value={name}
                       onChange={(e)=>setName(e.target.value)}
                       placeholder={"Введите название протокола"}
                       className={"protocol_add_inp"}/>
                <label form={"outlined-basic"}>Бренд*</label>
                <input type={"text"}
                       value={brand}
                       onChange={(e)=>setBrand(e.target.value)}
                       placeholder={"Выбурите бренд протокола"}
                       className={"protocol_add_inp"}/>
                <label form={"outlined-basic"}>Описание*</label>
                <input type={"text"}
                       value={description}
                       onChange={(e)=>setDescription(e.target.value)}
                       placeholder={"Введите описание"}
                       className={"protocol_add_large_inp"}/>
                <label form={"outlined-basic"}>Категория</label>
                <input type={"text"}
                       placeholder={"Введите категорию протокола"}
                       disabled={true}
                       className={"protocol_add_inp"}/>
                <div className={"protocol_product_text"}>Товары протокола</div>
                <div className={"protocol_products"}>
                    {searchedProd.map((elem)=>
                        elem.map(e=>
                            <div key={e.id} className={"protocol_products_section"}>
                                <div className={"protocol_product_name"}>{e.name}</div>
                                <div className={"protocol_product_brand"}>{e.brand.name}</div>
                                <div><img className={"protocols_trash"} src={Img.trash} alt={""}/></div>
                            </div>
                        )
                    )}

                </div>
                <div className={"protocol_add_search"}>
                    <TextField
                        size={"small"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        fullWidth={true}
                        className={"products_search_inp"}
                        placeholder={'Поиск по товарам'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <SearchSharp/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position={"end"}>
                                    <ClearOutlinedIcon cursor={"pointer"} onClick={searchEmpty} fontSize={"small"}/>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProtocolAdd;