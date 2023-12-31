import React from 'react'
import './Delete.css'
import { IoMdClose } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


interface DeleteAttrs {
    closeDeletePopUp(): void;
    onDeletePerson:(id: string) => void;
    id: string;
    name: string;
}

const Delete: React.FC<DeleteAttrs> = ({closeDeletePopUp, onDeletePerson, id, name}) => {
    return(
        <div className='DeleteBackground'>
            <div className='DeleteWrapper'>
                <div className="HeadText">Are You Sure You Want To Delete {name}</div>
                <div className='ButtonSection'>
                    <div onClick={() => onDeletePerson(id)} className='Button DeleteValidate'><MdDeleteForever/></div>
                    <div onClick={closeDeletePopUp} className='Button CloseValidate'><IoMdClose/></div>
                </div>
            </div>
        </div>
    )
}

export default Delete