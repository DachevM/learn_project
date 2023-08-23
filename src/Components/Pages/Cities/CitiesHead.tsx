import React, {FC, useState} from 'react';
import "./cities.css"
import {ICities} from "../../../types/types";

interface CitiesHeadProps {
    cities: ICities[]
    setCities: (v: ICities[]) => void
}

const CitiesHead: FC<CitiesHeadProps> = ({cities, setCities}) => {
    const [name, setCityName] = useState<string>("")
    const [address, setCityAddress] = useState<string>("")


    const newCityAdd = () => {
        const newCity = {
            name: name,
            address: address,
            id: String(Date.now())
        }
        setCities([...cities, newCity])
        setCityName("")
        setCityAddress("")
    }
    return (
        <div className={"cities_head"}>
            <input value={name}
                   onChange={(e) => setCityName(e.target.value)} type={"text"}
                   placeholder={"Введите название города"} className={"cities_head_inp"}/>
            <input value={address} onChange={(e) => setCityAddress(e.target.value)} type={"text"}
                   placeholder={"Введите адрес"} className={"cities_head_inp"}/>
            <button className={"cities_head_butt"} onClick={newCityAdd}>Добавить город</button>
        </div>
    );
};

export default CitiesHead;