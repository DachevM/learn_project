import React from 'react';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./promocode.css"
import {IPromocode} from "../../../types/types";
interface PromocodeBodyProps {
    promocode:IPromocode[]
    setPromocode:(value: IPromocode[])=>void
}
const PromocodeList = ({promocode,setPromocode}:PromocodeBodyProps) => {
    const removePromocode = (promo:IPromocode) => {
        return setPromocode(promocode.filter(e=>e.id !== promo.id))
    }
    return (
        <div className={"promocode_body"}>
            <div className={"promocode_body_head"}>
                Заголовок
            </div>
            {
                promocode.length !==0
                    ?
                    <div className={"promocode_body_layout"}>
                        {promocode.map((elem)=>
                            <div key={elem.id} className={"promocode_body_banners"}>
                                <div className={"promocode_body_right_banners"}>{elem.name}
                                    <div><EditOutlinedIcon cursor={"pointer"} sx={{marginRight: "20px"}}/>
                                        <DeleteOutlineOutlinedIcon onClick={()=>removePromocode(elem)} cursor={"pointer"}/></div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <p>Здесь пока нет промокодов</p>
            }


        </div>
    );
};

export default PromocodeList;