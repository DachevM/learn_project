import React from 'react';
import "./modal.css"
import {createPortal} from "react-dom";
interface DeleteProps {
    show:boolean,
    setShow:(v:boolean)=>void
    children: React.ReactNode

}
const DeleteModal = ({show,setShow,children}:DeleteProps) => {
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" ) {
            setShow(false);
        }
    });
    return (
        createPortal(<div className={show ? "modal_active":"modal"} onClick={()=>setShow(false)} >
            <div className={"delete_modal"}  onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>,document.getElementById("deleteModal") as HTMLElement)
    );
};

export default DeleteModal;