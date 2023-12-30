import React, {useEffect} from 'react';
import './App.css';
import { iDataProvider } from '../../dataProvider/iDataProvider';

interface AppAttrs {
  dataProvider: iDataProvider
}

const App: React.FC<AppAttrs> = ({dataProvider}) => {
  useEffect(() => {
    dataProvider.getAllPersons().then((data) => {
      console.log('Persons: ', data.results)
    }).catch((e) => {
      console.error('The error is: ', e)
    })
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
