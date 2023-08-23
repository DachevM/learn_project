import React, {useEffect, useState} from 'react';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Protocols from "./Protocols";
import "./protocol.css"
import ProtocolCategory from "./ProtocolCategory";
import {IProtocol, IProtocolCategory} from "../../../types/types";
import {protocolAPI, protocolCategoryAPI} from "../../../RTK/services/ProtocolService";

const ProtocolMain = () => {
    const [protocolsCategory, setProtocolsCategory] = useState<IProtocolCategory[]>([])
    const [protocols, setProtocols] = useState<IProtocol[]>([])
    const [selected, setSelected] = useState<(null | IProtocolCategory)>(null);

    const {data: protocol} = protocolAPI.useFetchProtocolsQuery("")
    const {data: protocolcategory} = protocolCategoryAPI.useFetchProtocolCategoriesQuery("")

    useEffect(() => {
        setProtocolsCategory(protocolcategory)
        setProtocols(protocol)
    }, [protocolcategory, protocol])

    const filtered = selected
        ? protocols && protocols.filter(e => e.protocol_category.id === selected.id)
        : [];
    console.log(protocolcategory)


    return (
        <div className={"mainsProt"}>
            <ProtocolCategory setSelected={setSelected} protocolsCategory={protocolsCategory}
                              setProtocols={setProtocolsCategory}/>
            <div><KeyboardDoubleArrowRightIcon/></div>
            {selected ? <Protocols protocols={protocols} setProtocols={setProtocols} filtered={filtered}/> :
                <p className={'choose_protocol'}>Выберите категорию</p>}
        </div>
    );
};

export default ProtocolMain;