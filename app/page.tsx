import React from 'react';
import Formulario from './components/formulario';
import Lista from './components/Lista';
import './globals.css'
import './pages/style.css'

function App() {
  return (
    <div className="grid grid-rows-(--min-content min-content auto) bg-gray-500 justify-items-center">
        <div className='bg-current p-4'>
            <Formulario />
            <Lista />       
        </div>
    </div>
  );
}

export default App;