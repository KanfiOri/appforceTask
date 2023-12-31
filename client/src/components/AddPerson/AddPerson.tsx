import React, { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import './AddPerson.css'
import PersonEntity from '../../Entities/Person';
import Input from '../Input/Input';
import {firstnameValidation, lastnameValidation, emailValidation, imgValidation, countryValidation, cityValidation, streetValidation} from '../../utils/inputValidation'

interface AddPersonAttrs {
    closeAddPersonPopUp(): void;
    onAddPerson(person: PersonEntity): void
    checkIfEmailExists(emai: string): Promise<boolean>
}

const AddPerson: React.FC<AddPersonAttrs> = ({closeAddPersonPopUp, onAddPerson, checkIfEmailExists}) => {
    const methods = useForm()
    const [isPersonError, setisPersonError] = useState(false) 
    const [errorMessage, setErrorMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    useEffect(() => {
        if(success) {
            addPerson()
        }
    }, [success])

    const addPerson = () => {
            const person: PersonEntity = {
                id: {
                    value: `${Math.floor(Math.random() * 100000) + 1}`
                },
                name: {
                    title: 'Mr',
                    first: `${firstName}`,
                    last: `${lastName}`
                },
                email: `${email}`,
                picture: {
                    medium: `${pictureUrl}`
                },
                location: {
                    country: `${country}`,
                    city: `${city}`,
                    street: {
                        name: `${street}`
                    }
                }
            }

            onAddPerson(person)
            closeAddPersonPopUp()
    }

    const onSubmit = methods.handleSubmit(data => {
            setSuccess(true)
            setFirstName(data.firstname)
            setLastName(data.lastname)
            setEmail(data.email)
            setCountry(data.country)
            setCity(data.city)
            setStreet(data.street)
            setPictureUrl(data.img)
    
            methods.reset()
    })

    return(
        <FormProvider {...methods}>
            <div className="AddPersonBackground">
                <div className='AddPersonWrapper'>
                    <div className="AddPersonTitle">Add Person</div>
                            <form onSubmit={e => e.preventDefault()} noValidate>
                                <Input {...firstnameValidation} />
                                <Input {...lastnameValidation} />
                                <Input {...emailValidation(checkIfEmailExists)} />
                                <Input {...imgValidation} />
                                <Input {...countryValidation} />
                                <Input {...cityValidation}/>
                                <Input {...streetValidation} />
                            </form>
                    <div className='ButtonSection'>
                        <div onClick={onSubmit} className='Button Create'>Create</div>
                        <div onClick={ closeAddPersonPopUp } className="Button Close">Close</div>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}

export default AddPerson