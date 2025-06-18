'use client';

import React from 'react';
import Button from '../buttons';

const Formulario = () => {
  return (
    <div className='w-full max-w-xs'>   
        <form className='bg-gray-300 inset-shadow-md rounded px-8 pt-6 pb-8 mb-4'> 
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tarefa'>
                 Adicione alguma coisa nova
                </label>
                <input className='shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Tempo
                </label>
                <input
                    className="shadow-lg appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type='time'
                    step='1'
                    name='tempo'
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <div className='flex justify-center'>
            <Button>adicionar</Button>
            </div>
        </form> 
    </div>

  );
};

export default Formulario;

