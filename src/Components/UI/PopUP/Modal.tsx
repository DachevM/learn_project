import React, {memo} from 'react';
import "./modal.css"
import {createPortal} from "react-dom";
interface ModalProps {
    show:boolean,
    setShow:(v:boolean)=>void
    children: React.ReactNode

}

const Modal = memo(({show, setShow,children}: ModalProps) => {

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" ) {
            setShow(false);
        }
    });

    return (
        createPortal(<div className={show ? "modal_active":"modal"} onClick={()=>setShow(false)} >
            <div className={"content"}  onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>, document.getElementById("modals") as HTMLInputElement )
    );
});

export default Modal;