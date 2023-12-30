import React from 'react'
import PersonEntity from '../../Entities/Person'
import './Person.css'

interface PersonAttrs {
    person: PersonEntity
    onDeletePerson:(id: string) => void 
}

const Person: React.FC<PersonAttrs> = ({person, onDeletePerson}) => {
    return (
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
                <div className="Button">Edit</div>
                <div className="Button Delete" onClick={() => {onDeletePerson(person.id.value)}}>Delete</div>
            </div>
        </div>
    )
}

export default Person;