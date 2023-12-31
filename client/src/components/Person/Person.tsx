import React, {useState} from 'react'
import PersonEntity from '../../Entities/Person'
import './Person.css'
import EditPerson from '../EditPerson/EditPerson';
import { TiPencil } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import Delete from '../Delete/Delete';

interface PersonAttrs {
    person: PersonEntity;
    onDeletePerson:(id: string) => void;
    onUpdatePerson: (id: string, firstname: string, lastname: string,email: string, country: string, city: string, street: string) => void
    checkIfEmailExists(emai: string): Promise<boolean>;
}

const Person: React.FC<PersonAttrs> = ({person, onDeletePerson, onUpdatePerson, checkIfEmailExists}) => {
    const [deleteValidation, setDeleteValidation]= useState(false)
    const [isEditPersonClicked, setIsEditPersonClicked] = useState(false)
    const openEditPersonPopup = () => {
        setIsEditPersonClicked(true)
      }
    
    const closeEditPersonPopUp = () => {
        setIsEditPersonClicked(false)
      }
    
    const openDeletePopUp = () => {
        setDeleteValidation(true)
    }

    const closeDeletePopUp = () => {
        setDeleteValidation(false)
    }
    return (
        <>
            <div className="Person">
                <div className="PersonDetails">
                    <img src={person.picture.medium}></img>
                    <div className='TextDetail'>
                        <div className='Name'>
                            {person.name.title} {person.name.first} {person.name.last}
                        </div>
                        <div className="Email">
                            {person.email}
                        </div>
                        <div className="location">
                            {person.location.country}, {person.location.city}, {person.location.street.name}
                        </div>
                    </div>
                </div>
                <div className='ButtonSection'>
                    <div className="EditOrDeleteButton" onClick={openEditPersonPopup}><TiPencil /></div>
                    <div className="EditOrDeleteButton Delete" onClick={openDeletePopUp}><MdDeleteForever /></div>
                </div>
            </div>
            {isEditPersonClicked && <EditPerson closeEditPersonPopUp={closeEditPersonPopUp} person={person} checkIfEmailExists={checkIfEmailExists} onUpdatePerson={onUpdatePerson}  />}
            {deleteValidation&& <Delete closeDeletePopUp={closeDeletePopUp} onDeletePerson={onDeletePerson} id={person.id.value} name={person.name.first + " " + person.name.last}/>}
        </>
    )
}

export default Person;