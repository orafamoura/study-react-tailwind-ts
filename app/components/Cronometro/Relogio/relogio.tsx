export default function Relogio(){
    return( //posso colocar um React.Fragment para fazer a funcao do pai
        <>
            <div className="border rounded-lg px-4 py-2 inset-shadow-sm">
                <span className="font-bold font-mono text-2xl text-gray-800">0</span>
            </div>
            <div className="border rounded-lg px-4 py-2 inset-shadow-sm">
                <span className="font-bold font-mono text-2xl text-gray-800">0</span>
            </div>
            <div className="">
                <span className="font-bold font-mono text-2xl text-gray-800">:</span>
            </div>
            <div className="border rounded-lg px-4 py-2 inset-shadow-sm">
                <span className="font-bold font-mono text-2xl text-gray-800">0</span>
            </div>
            <div className="border rounded-lg px-4 py-2 inset-shadow-sm">
                <span className="font-bold font-mono text-2xl text-gray-800">0</span>
            </div>

        </>
    )
}