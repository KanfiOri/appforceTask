import React from 'react';
import './Input.css' 
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import findInputError from '../../utils/findInputError';
import isFormInvalid from '../../utils/isFormInvalid';

interface InputAttrs {
    label: string,
    placeHolder: string,
    type: string,
    name: string,
    validation: {
        required: {
            value: boolean,
            message: string
        },
        minLength?: {
            value: number,
            message: string
        }
    },
}

interface InputErrorAttrs {
    message: string
}

const Input: React.FC<InputAttrs> = ({ label, placeHolder, type, name, validation }) => {
    const { register, formState: { errors } } = useFormContext()
    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)
    return (
        <div className='InputContainer'>
            <div className="TextAndError">
                <div className="text">{label}</div>
                {
                    isInvalid && (
                        <InputError message={inputError.error.message} key={inputError.error.message} />
                    )
                }
            </div>
            <input className="InputField" type={type} placeholder={placeHolder} {...register(label, validation)}>                
            </input>
        </div>
    )
}

const InputError: React.FC<InputErrorAttrs>= ({ message }) => {
    return(
        <div className='MessageError'>
            {message}
        </div>
    )
}


export default Input;