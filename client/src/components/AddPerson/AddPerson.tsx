import React, { useState } from 'react'
import './AddPerson.css'

const AddPerson = () => {
    return(
        <div className="AddPersonBackground">
            <div className='AddPersonWrapper'>
                <div className="AddPersonTitle">Add Person</div>
                <input className="InsertData" placeholder='First Name'></input>
                <input className="InsertData" placeholder='Last Name'></input>
                <input className="InsertData" placeholder='Email'></input>
                <input className="InsertData" placeholder='Country'></input>
                <input className="InsertData" placeholder='City'></input>
                <input className="InsertData" placeholder='Street'></input>
                <input className="InsertData" placeholder='Picture Url'></input>
                <div className="Close">CLOSE</div>
            </div>
        </div>
    )
}

export default AddPerson