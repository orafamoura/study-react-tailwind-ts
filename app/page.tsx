import React from 'react';
import Formulario from './components/formulario';
import Lista from './components/Lista';
import './globals.css'
import './pages/style.css'
import Cronometro from './components/Cronometro';

function App() {
  return (
    <div className="grid grid-rows-(--min-content min-content auto) bg-gray-500 justify-items-center">
        <div className='flex flex-wrap p-4'>
            <div className='w-full lg:w-1/2 p-2'>
                <Formulario />
                <Cronometro /> 
            </div>
            <div className='w-full lg:w-1/2 p-2'>
                <Lista />
            </div>
   
        </div>
    </div>
  );
}

export default App;