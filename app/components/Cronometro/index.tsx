import Button from "../buttons";
import Relogio from "./Relogio/relogio";

export default function Cronometro(){
    return (
        <div className="bg-gray-300 rounded py-4 px-6 gap-1 justify-items-center">
            <p className="text-sm font-bold text-gray-800 mb-4">Escolha um card e inicie o cronometro</p>
            <div className="flex flex-wrap justify-center items-center mb-4">
                <Relogio/>
            </div>
            <Button className="mb-4">
                Comecar!
            </Button>
        </div>
    )
}