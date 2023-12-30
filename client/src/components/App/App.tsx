import React, {useEffect, useState} from 'react';
import PersonEntity from '../../Entities/Person';
import './App.css';
import { iDataProvider } from '../../dataProvider/iDataProvider';
import Person from '../Person/Person';
import AddPerson from '../AddPerson/AddPerson';

interface AppAttrs {
  dataProvider: iDataProvider
}

const App: React.FC<AppAttrs> = ({dataProvider}) => {
  const [persons, setPersons] = useState<PersonEntity[]>([])
  const [isAddPersonClicked, setIsAddPersonClicked] = useState(false)
  useEffect(() => {
    dataProvider.getAllPersons().then((data) => {
      setPersons(data.results)
    }).catch((e) => {
      console.error('The error is: ', e)
    })
  }, [])

  const onDeletePerson = (id: string) => {
    setPersons(persons.filter((person) => person.id.value !== id))

  }

  const openAddPersonPopup = () => {
    setIsAddPersonClicked(true)
  }

  const closeAddPersonPopUp = () => {
    setIsAddPersonClicked(false)
  }

  const onAddPerson = (person: PersonEntity) => {
    setPersons([...persons, person])
  }

  return (
      <div className="App">
        <div className="DataWraper">
          <div className='AddPerson' onClick={openAddPersonPopup}>
            Add Person
          </div>
          <div className='FilterWrapper'>

          </div >
          <div className='PersonsWrapper'>
            {
              persons.map((person) =>{
                return(
                  <Person key={person.id.value} person={person} onDeletePerson={onDeletePerson}/>
                )
              })
            }
          </div>
        </div>
        {
          isAddPersonClicked && <AddPerson />
        }
      </div>
  );
}

export default App;
