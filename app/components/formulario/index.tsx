'use client';

import React, { ChangeEvent, useState } from 'react';
import Button from '../buttons';

interface formsProps {
    tarefa: string,
    tempo: string
}

const Formulario = ({tarefa, tempo}: formsProps) => {

    const [inputs, setInputs] = useState<formsProps>({tarefa, tempo});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({...prev, [name]: value}));
    };

    return (
        <div className='w-full'>   
            <form className='flex flex-wrap bg-gray-300 inset-shadow-md rounded px-8 pt-6 pb-8 mb-4'> 
                <div className='m-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tarefa'>
                    Adicione alguma coisa nova
                    </label>
                    <input className='shadow-lg appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='string'
                        value={tarefa}
                        onChange={handleChange}
                        name='tarefa'
                        id='tarefa'
                        placeholder='O que você quer estudar?'
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
                        value={tempo}
                        onChange={handleChange}
                        step='1'
                        name='tempo'
                        id='tempo'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <div className='flex justify-center'>
                <Button onClick={() => console.log(inputs)}>adiciona</Button>
                </div>
            </form> 
        </div>

    );
};

export default Formulario;

