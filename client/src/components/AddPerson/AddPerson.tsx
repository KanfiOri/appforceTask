import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import './AddPerson.css'
import PersonEntity from '../../Entities/Person';
import Input from '../Input/Input';

interface AddPersonAttrs {
    closeAddPersonPopUp(): void;
    onAddPerson(person: PersonEntity): void
}

const AddPerson: React.FC<AddPersonAttrs> = ({closeAddPersonPopUp, onAddPerson}) => {
    const methods = useForm()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
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
        console.log(data)
    })

    return(
        <FormProvider {...methods}>
            <div className="AddPersonBackground">
                <div className='AddPersonWrapper'>
                    <div className="AddPersonTitle">Add Person</div>
                            <form onSubmit={e => e.preventDefault()} noValidate>
                                <Input label="First Name: " placeHolder='Enter your first name...' type="text" name='firstname' validation={{required: {value: true,message: 'required'}, minLength: {value: 3, message: 'min 3 characters'}}} />
                                <Input label="Last Name: "  placeHolder='Enter your last name...' type="text" name='lastname' validation={{required: {value: true,message: 'required'}, minLength: {value: 3, message: 'min 3 characters'}}} />
                                <Input label="Email: "  placeHolder='Enter your email...' type="text" name='email' validation={{required: {value: true,message: 'required'}}} />
                                <Input label="img: "  placeHolder='Enter your img src...' type="text" name='img' validation={{required: {value: true,message: 'required'}}} />
                                <Input label="Country: "  placeHolder='Enter your country...' type="text" name='country' validation={{required: {value: true,message: 'required'}}} />
                                <Input label="City: "  placeHolder='Enter your city...' type="text" name='city' validation={{required: {value: true,message: 'required'}}} />
                                <Input label="Street: "  placeHolder='Enter your Street...' type="text" name='street' validation={{required: {value: true,message: 'required'}}} />
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