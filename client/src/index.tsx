import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import AxiosDataProvider from './Api/axiosDataProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const dataProvider = new AxiosDataProvider()
root.render(
  <React.StrictMode>
    <App dataProvider={dataProvider}/>
  </React.StrictMode>
);