'use client';

import React, { useRef } from 'react';
import Button from '../buttons';

const Formulario = () => {

    const inputRef = useRef(null)

    function criarCardLista(){  
        console.log(inputRef)
    }

    return (
        <div className='w-full'>   
            <form className='flex flex-wrap bg-gray-300 inset-shadow-md rounded px-8 pt-6 pb-8 mb-4'> 
                <div className='m-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tarefa'>
                    Adicione alguma coisa nova
                    </label>
                    <input className='shadow-lg appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        placeholder='O que você quer estudar?'
                        ref={inputRef}
                        required
                    />
                </div>
                <div className='m-4'>   
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Tempo
                    </label>
                    <input
                        className="shadow-lg appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <Button onClick={criarCardLista}>adiciona</Button>
                </div>
            </form> 
        </div>

    );
};

export default Formulario;

