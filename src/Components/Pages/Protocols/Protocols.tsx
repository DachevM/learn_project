import React, { useState} from 'react';
import {Button} from "@mui/material";
import {theme} from "../../../Customization/Customization";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {ThemeProvider} from "@emotion/react";
import "./protocol.css"
import Modal from "../../UI/PopUP/Modal";
import ProtocolAdd from "./ProtocolAdd";
import {IProtocol} from "../../../types/types";
import {Img} from "../../../images/Img";

interface ProtocolProps {
    filtered: IProtocol[]
    protocols: IProtocol[]
    setProtocols:(value: IProtocol[])=>void
}

const Protocols = ({filtered, setProtocols, protocols}:ProtocolProps) => {
    const [show, setShow] = useState<boolean>(false)

    const showModal = () => {
        setShow(true)
    }
    return (
        <div className={"protocols"}>
            <div className={"protocols_head"}>
                <button className={"protocols_head_butt"} onClick={showModal} >Добавить протокол</button>
            </div>

            <div>
                <div className={"protocolsCategory_body_head"}>Название протокола</div>
                {filtered && filtered.length !== 0
                    ?
                    <div className={"protocolsCategory_data"}>
                        { filtered && filtered.map(elem =>
                            <div key={elem.id}>
                                {show &&
                                    <Modal show={show} setShow={setShow}><ProtocolAdd key={elem.id} filtered={filtered}
                                                                                      setProtocols={setProtocols}
                                                                                      protocols={protocols}
                                                                                      setShow={setShow}
                                                                                      /></Modal>}

                                <div key={elem.id} className={"protocolsCategory_body_data"}>

                                    <div className={"protocolsCategory_body_data_name"}>{elem.name}</div>

                                    <div>
                                        <img className={"protocols_pen"} src={Img.pen} alt={""} />
                                        <img className={"protocols_trash"} src={Img.trash} alt={""} />
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    :
                    <p>Здесь пока нет протоколов</p>
                }

            </div>
        </div>
    );
};

export default Protocols;