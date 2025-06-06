import React from 'react';
import Formulario from './components/formulario';
import Lista from './components/Lista';
import './globals.css'
import './pages/style.css'

function App() {
  return (
    <div className="grid grid-rows-(--min-content min-content auto) bg-black">
        <Formulario />
        <Lista />
    </div>
  );
}

export default App;