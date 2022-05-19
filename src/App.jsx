import './App.css';
import React from 'react';
import AppLogo from './components/AppLogo';
import Mesas from './components/Mesas';


 function App() {
   const mesas = () =>{
   return Mesas;
   };

  return (
    <div className="App mt-5">
      <AppLogo/>
      <button className='btn btn-warning' onClick={mesas}> Mesas
        </button>
    </div>
  );
}

export default App;
