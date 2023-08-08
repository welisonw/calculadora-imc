'use client';

import { Input } from "@/components/Input/Input";
import { useState } from "react";
import powered from '../assets/powered.png'

export default function Home() {
  const [ height, setHeight ] = useState<number>(0);
  const [ weight, setWeight ] = useState<number>(0);

  const handleClickCalculate = () => {
    if (height && weight) {
      
    } else {
      alert('Todos os campos devem ser preenchidos!');
    };
  };


  return (
    <div className="max-w-4xl mx-auto px-5">
      <header className="my-10">
        <div>
          <img src={powered.src} alt="Logo" width={150} />
        </div>
      </header>

      <main className="flex gap-10 m-auto">
        {/* Leftside */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-700 mb-3">Calcule o seu IMC</h1>
          <p className="text-gray-500 mb-3">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>
          <Input
            type="number"
            value={height > 0 ? height : ''} 
            onChange={e => setHeight(Number(e.target.value))}
            placeholder="Digite a sua altura em metros (Ex.: 1.75)"
            className="w-full mt-7 border-b-2 py-2 px-1"
          />
          <Input
            type="number"
            value={weight > 0 ? weight : ''} 
            onChange={e => setWeight(Number(e.target.value))}
            placeholder="Digite o seu peso em kg (Ex.: 68.3)"
            className="w-full my-6 border-b-2 py-2 px-1"
          />
          <button
            className="block w-full bg-blue-500 p-2 mt-3 rounded-md font-bold text-white duration-200 hover:opacity-80"
            onClick={handleClickCalculate}
          >
            Calcular
          </button>
        </div>

        {/* Rightside */}
        <div className="flex-1">
          cards
        </div>
      </main>
    </div>  
  );
};
