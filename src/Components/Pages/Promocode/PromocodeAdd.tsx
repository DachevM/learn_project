import React, { useMemo, useState} from 'react';
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../../Customization/Customization";
import {Button, FormControl, InputAdornment, MenuItem, Select, TextField} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {SearchSharp} from "@mui/icons-material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {IPromocode, Product} from "../../../types/types";
interface PromocodeAddProps {
    promocode: IPromocode[]
    setShow:(value: boolean)=>void
    setPromocode: (v: IPromocode[]) => void
}


const PromocodeAdd = ({setShow,promocode,setPromocode}:PromocodeAddProps) => {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [name,setName]=useState("")
    const [search, setSearch] = useState("")

    const searchedProd = useMemo(() => {
        let result = promocode.map(elem => elem.products.filter((e)=>
            e.name.toLowerCase().includes(search.toLowerCase()))
        )
        return result

    }, [search])
    const searchEmpty = () => {
        setSearch("")
    }
    const newPromocodeAdd = () => {

        const newPromocode: IPromocode={
            name:name,
            id:Date.now() + "",
            percent: 0,
            promocode: "",
            catalog_product: {
                "id": "",
                "name": "",
                "position": 0,
                "__v": 0
            },
            sub_catalog_product: {
                "id": "",
                "name": "",
                "position": 0,
                "catalog_product": "",
                "__v": 0,
            },
            products: [],
        };
        setPromocode([...promocode,newPromocode])
        setName("")
        setShow(false)
    }

    return (
        <div className={"promocode_add"}>
            <div className={"promocode_add_head"}>
                <ThemeProvider theme={theme}>
                    <Button sx={{marginRight:"15px"}} onClick={()=>setShow(false)} fullWidth={true} size={'medium'} variant={"outlined"}> Удалить </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button onClick={newPromocodeAdd} fullWidth={true} size={'medium'} variant={"contained"}> Сохранить </Button>
                </ThemeProvider>
            </div>
            <div className={"promocode_add_body"}>
                <>
                    <label form={"outlined-basic"}>Заголовок</label>
                    <TextField
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        sx={{marginBottom: "15px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Запишите заголовок"} variant="outlined"/>
                    <label form={"outlined-basic"}>Промокод*</label>
                    <TextField
                        sx={{marginBottom: "15px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Запишите название промокода"} variant="outlined"/>
                    <label form={"outlined-basic"}>Процент скидки</label>
                    <TextField
                        sx={{marginBottom: "40px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Запишите процент скидки"} variant="outlined"/>
                    <div className={"promocode_category"}>
                        <FormControl sx={{marginRight: "10px"}} fullWidth={true} size="small">
                            <label form={"demo-select-small"}>Категория</label>
                            <Select
                                displayEmpty
                                id="demo-select-small"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem disabled value="">
                                    <em style={{color: "#737680"}}>Выберите категорию</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth={true} size="small">
                            <label form={"demo-select-small"}>Подкатегория</label>
                            <Select
                                displayEmpty
                                id="demo-select-small"
                                value={subcategory}
                                onChange={(e) => setSubcategory(e.target.value)}
                            >
                                <MenuItem disabled value="">
                                    <em style={{color: "#737680"}}>Выберите подкатегорию</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <label form={"outlined-basic"}>Бренд</label>
                    <TextField
                        sx={{marginBottom: "30px"}}
                        fullWidth={true}
                        size={"small"} id="outlined-basic"
                        placeholder={"Запишите название бренда"} variant="outlined"/>
                    <div className={"promocode_products"}>
                        <div>Товары протокола</div>
                        <div className={"promocode_products"}>
                            {searchedProd.map((elem)=>
                                elem.map(e=>
                                    <div key={e.id} className={"promocode_products_section"}>
                                        <div className={"promocode_product_name"}>{e.name}</div>
                                        <div className={"promocode_product_brand"}>{e.brand.name}</div>
                                        <div><DeleteOutlineOutlinedIcon cursor={"pointer"}/></div>
                                    </div>
                                )
                            )}

                        </div>
                        <div className={"promocode_add_search"}>
                            <TextField
                                size={"small"}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                fullWidth={true}
                                className={"promocode_search_inp"}
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
                </>
            </div>
        </div>
    );
};

export default PromocodeAdd;