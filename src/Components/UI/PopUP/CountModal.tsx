import React, { memo} from 'react';
import {createPortal} from "react-dom";
import {Img} from "../../../images/Img";


    interface ModalProps {
        show:boolean,
        setShow:(v:boolean)=>void
        setCheckAll:(v:boolean)=>void
        number:number
        setSelectedItems:(v:[])=>void

    }

    const CountModal = memo(({show, setShow,number,setSelectedItems,setCheckAll}:ModalProps) => {

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" ) {
                setShow(false);
            }
        });

        const Delete = () => {
            setSelectedItems([])
            setCheckAll(false)
            setShow(false)
        }

        const Close = () => {
            setShow(false)
        }

        if (number === 0){
            setShow(false)
        }

        return (
            createPortal(<div className={show ? "modal_count_active":"modal"}  >
                <div className={"modal_count"} >
                    <img src={Img.cross} alt={""} className={"cross_count"} onClick={Close}/>
                 <p className={"products_count"}>Количество выбранных товаров: {number}</p>
                    <button onClick={Delete} className={"delete_count_butt"}>Удалить</button>
                </div>
            </div>, document.getElementById("CountModal") as HTMLInputElement )
        );
    });


export default CountModal;