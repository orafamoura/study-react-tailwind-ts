

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}){
    return (
        <li className=' mt-2 bg-gray-300 rounded text-gray-700 font-bold px-3 py-2'>
            <h3 className='pb-1'> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}