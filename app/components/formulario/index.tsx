'use client';

import React from 'react';
import ButtonNormal from '../buttons';

const Formulario = () => {
  return (
    <form className='w-full max-w-xs'> 
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label htmlFor='tarefa'>
          Adicione alguma coisa nova
        </label>
        <input 
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que você quer estudar?'
          required
        />
      </div>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label>
          Tempo
        </label>
        <input
          type='time'
          step='1'
          name='tempo'
          id='tempo'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <ButtonNormal />
    </form> 
  );
};

export default Formulario;

