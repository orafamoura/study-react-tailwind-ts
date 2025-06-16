import React from 'react';

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
          <li className=' mt-2 bg-gray-300 rounded text-white px-3 py-2' key={index}>
          <h3 className='pb-1'> {item.tarefa} </h3>
          <span> {item.tempo} </span>
        </li>
        ))}
      </ul>
    </aside>
  )}

  export default Lista;