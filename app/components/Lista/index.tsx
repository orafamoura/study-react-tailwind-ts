import React from 'react';
import Item from './Item/item';

function Lista(){
  const tarefas = [{
    tarefa: 'React',
    tempo: '01:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '02:00:00'
  }, {
    tarefa: 'Typescript',
    tempo: '03:00:00'
  }
]   
  return (
    <aside className='inset-shadow-md rounded  pt-2 pb-2 mb-1'>
      <h2 className='text-white'> Estudos do dia </h2>
      <ul className=''>
        {tarefas.map((item, index) => (
            <Item 
                key={index}
                {...item}
            />
        ))}  
      </ul>
    </aside>
  )}

  export default Lista;