import React from 'react';
import "./cities.css"
import {ICities} from "../../../types/types";
import CitiesItem from "./CitiesItem";

interface CitiesHeadProps {
    cities: ICities[]
    setCities: (v: ICities[]) => void
}

const CitiesList = ({cities, setCities}: CitiesHeadProps) => {

    return (
        <div className={"cities_body"}>
            <div className={"cities_body_head"}>
                <div className={"cities_body_left_head"}>Город</div>
                <div className={"cities_body_right_head"}>Адрес</div>
            </div>
            {cities.length
                ?
                <div className={"cities_body_layout"}>
                    {cities.map((elem) =>
                        <CitiesItem cities={cities} setCities={setCities} city={elem}/>
                    )}
                </div>
                :
                <p>Здесь пока нет городов</p>
            }


        </div>
    );
};

export default CitiesList;