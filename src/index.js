import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';

import Calculator from './main/Calculator';

ReactDOM.render(

  <React.StrictMode>

    {/* <App /> */}

    <>

      <h1>
        
        Calculadora
        
      </h1>

      <Calculator />
    
    </>


  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();
