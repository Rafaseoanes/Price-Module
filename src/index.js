import React from 'react';
import ReactDOM from 'react-dom/client';
import Prices from './Components/Prices';
import './index.css';
import {basic, premium, ultimate} from './data'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='grid'>
   <Prices data={basic} />
   <Prices data={premium} />
   <Prices data={ultimate}  />
  
      
    </div>
   
  </React.StrictMode>
);


