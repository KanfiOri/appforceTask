import React, { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import '../AddPerson/AddPerson.css'
import Input from '../Input/Input';
import {firstnameValidation, lastnameValidation, emailValidation, countryValidation, cityValidation, streetValidation} from '../../utils/inputValidation'
import PersonEntity from '../../Entities/Person';
import './EditPerson.css'
import { IoMdClose } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";

interface EditPersonAttrs {
    closeEditPersonPopUp(): void;
    person: PersonEntity;
    checkIfEmailExists(emai: string): Promise<boolean>
    onUpdatePerson(id: string, firstname: string, lastname: string, email: string, country: string, city: string, street: string): void
}


const EditPerson: React.FC<EditPersonAttrs> = ({ closeEditPersonPopUp, person, checkIfEmailExists, onUpdatePerson }) => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    
    useEffect(() => {
        if(success) {
            updatePerson()
        }
    }, [success])

    const updatePerson = () => {
        onUpdatePerson(person.id.value, firstName, lastName, email, country, city, street)
        closeEditPersonPopUp()
    }

    const onSubmit = methods.handleSubmit(data => {
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setEmail(data.email)
        setCountry(data.country)
        setCity(data.city)
        setStreet(data.street)
        setSuccess(true)
    
        methods.reset()
    })
    return(
        <FormProvider {...methods}>
            <div className='EditPersonBackground'>
                <div className='EditPersonWrapper'>
                    <div className='EditPersonTitle'>Edit Person - {person.name.first} {person.name.last}</div>
                    <form onSubmit={e => e.preventDefault()} noValidate>
                        <Input {...firstnameValidation} />
                        <Input {...lastnameValidation} />
                        <Input {...emailValidation(checkIfEmailExists)} />
                        <Input {...countryValidation} />
                        <Input {...cityValidation}/>
                        <Input {...streetValidation} />
                    </form>
                    <div className='ButtonSection'>
                        <div onClick={onSubmit} className='Button Create'><IoMdClose /></div>
                        <div onClick={ closeEditPersonPopUp } className="Button Close"><IoMdClose /></div>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}

export default EditPerson