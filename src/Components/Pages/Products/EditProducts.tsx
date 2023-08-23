import React, {useState} from 'react';
import {FormControl, Select, MenuItem, SelectChangeEvent} from "@mui/material";
import "./products.css"
import {ICharacteristics, Images, IProducts} from "../../../types/types";
import {Img} from "../../../images/Img";

interface EditProps {
    product: IProducts
    setShow: (v: boolean) => void
    setProductName: (v: string) => void
    setProductCodeFrom1C: (v: string) => void
}

const EditProducts = ({product, setShow, setProductName, setProductCodeFrom1C}: EditProps) => {
    const [categ, setCateg] = useState<string>('');
    const [subcateg, setSubcateg] = useState<string>('');
    const [name, setName] = useState(product.name);
    const [nameFrom1c, setNameFrom1c] = useState<string>(product.nameFrom1C);
    const [codeFrom1C, setCodeFrom1C] = useState<string>(product.codeFrom1C);
    const [description, setDescription] = useState<string>(product.description);
    const [price, setPrice] = useState<string | number>(product.price);
    const [image, setImage] = useState<Images[]>(product.images);
    const [characteristics, setCharacteristics] = useState<ICharacteristics[]>(product.characteristics);
    const changeName = () => {
        setProductName(name)
        setProductCodeFrom1C(codeFrom1C)
        setShow(false)
    }

    const Save = () => {
        setProductName(name)
        setProductCodeFrom1C(codeFrom1C)
    }
    document.addEventListener('keydown', (e) => {
        if (e.code === "Enter") {
            setProductName(name)
            setProductCodeFrom1C(codeFrom1C)
            setShow(false)
        }
    });

    return (
        <div key={product.id} className={"edit_products"}>
            <div className={"edit_head"}>

                <button onClick={Save} className={"edit_products_butt_save"}>Сохранить</button>
                <button onClick={changeName} className={"edit_products_butt_close"}>Сохранить и закрыть</button>
            </div>
            <div className={"edit_body"}>
                <div className={"edit_descr"}>
                    <label form={"outlined-basic"}>Название 1С</label>
                    <input disabled={true} value={nameFrom1c}
                           onChange={(e) => setNameFrom1c(e.target.value)} type={"text"}
                           className={"edit_products_inp"}/>
                    <label form={"outlined-basic"}>Название*</label>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)} type={"text"}
                           className={"edit_products_inp"}/>
                    <label form={"outlined-basic"}>Бренд*</label>
                    <div className={"products_edit_select"}>
                        <FormControl sx={{marginBottom: "15px"}} fullWidth={true} size="small">
                            <Select
                                displayEmpty
                                id="demo-select-small"
                                onChange={(e: SelectChangeEvent) => setCateg(e.target.value)}>
                                <MenuItem disabled value="">
                                    <em style={{color: "#737680"}}>Выберите категорию</em>
                                </MenuItem>
                                <MenuItem>{product.brand.name}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <label form={"demo-select-small"}>Артикул</label>
                    <input disabled={true}
                           value={codeFrom1C}
                           onChange={(e) => setCodeFrom1C(e.target.value)} type={"text"}
                           placeholder={"Введите название категории"} className={"edit_products_inp"}/>
                    <label form={"outlined-basic"}>Описание*</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type={"text"}
                           className={"edit_products_descr_inp"}/>
                </div>
                <div className={"image"}>
                    {image.map((elem: Images) =>
                        <div key={elem.name} className={"image_descr"}>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className={"images_prod"} src={elem.name} alt="picture"/>
                            <div className={"image_name"}>{elem.name}</div>
                            <img className={"trash"} src={Img.trash} alt={""}
                                 onClick={() => setImage(image.filter((e: Images) => e.name !== elem.name))}
                            />
                        </div>
                    )}
                    <input type={"text"} placeholder={"Вставьте ссылку на Google Drive"}
                           className={"edit_products_inp"}/>
                    <div className={"edit_txt"}>
                        <p>Максимум 5 изображений</p>
                        <p>Размер фото 1000x1000 px PNG, JPG, JPEG</p>
                    </div>
                </div>
                <div className={"edit_price"}>
                    <label form={"outlined-basic"}>Цена</label>
                    <input disabled={true} value={price}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                           type={"text"}
                           className={"edit_products_inline_inp"}/>
                </div>
                <div className={"edit_category"}>
                    <FormControl sx={{marginBottom: "20px"}} fullWidth={true} size="small">
                        <label form={"demo-select-small"}>Категория</label>
                        <Select
                            displayEmpty
                            id="demo-select-small"
                            value={categ}
                            onChange={(e) => setCateg(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                <em style={{color: "#737680"}}>Выберите категорию</em>
                            </MenuItem>
                            <MenuItem>{product.catalog_product.name}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{marginLeft: "10px"}} fullWidth={true} size="small">
                        <label form={"demo-select-small"}>Подкатегория</label>
                        <Select
                            displayEmpty
                            id="demo-select-small"
                            value={subcateg}
                            onChange={(e) => setSubcateg(e.target.value)}
                        >
                            <MenuItem disabled value="">
                                <em style={{color: "#737680"}}>Выберите категорию</em>
                            </MenuItem>
                            <MenuItem>{product.sub_catalog_product.name}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <label form={"edit_volume"}>Объем</label>
                <div className={"edit_volume"}>
                    <div className={"edit_volume_top"}>
                        <input placeholder={"50 мл"} type={"text"} className={"edit_products_inline_inp"}/>
                        <input type={"text"} placeholder={"SK00U2"} className={"edit_products_inline_inp"}/>
                        <img src={Img.trash} alt={""} className={"trash"}/>
                    </div>
                    <div className={"edit_volume_top"}>
                        <input type={"text"} placeholder={"Значение"} className={"edit_products_inline_inp"}/>
                        <input value={name} type={"text"} placeholder={"Артикул"}
                               className={"edit_products_inline_inp"}/>
                        <img src={Img.trash} className={"trash"} alt={""}/>
                    </div>
                </div>
                <h4 className={"edit_products_add"}>+ Добавить объем</h4>
                <label form={"edit_parameter"}>Характеристики</label>
                {characteristics.map((e: ICharacteristics) =>
                    <div key={e.id} className={"edit_parameter"}>
                        <div className={"edit_volume_top"}>
                            <input value={e.key} type={"text"} className={"edit_products_inline_inp"}/>
                            <input value={e.value} type={"text"} className={"edit_products_inline_inp"}/>
                            <img src={Img.trash} className={"trash"} alt={""}
                                 onClick={() => setCharacteristics(characteristics.filter((elem: ICharacteristics) => elem.id !== e.id))}
                            />
                        </div>
                    </div>
                )}
                <h4 className={"edit_products_add"}>+ Добавить характеристики</h4>
                <label form={"outlined-basic"}>Тэги товаров</label>
                <div className={"tags"}>
                    {product.tags.map((e) =>
                        <div key={e.id} className={"tag"}>{e.name}</div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default EditProducts;