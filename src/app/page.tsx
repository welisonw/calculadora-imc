'use client';

import { Input } from "@/components/Input/Input";
import { useState } from "react";

export default function Home() {
  const [ height, setHeight ] = useState('');
  const [ weight, setWeight ] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      <header className="my-10">
        <div>
          img 
        </div>
      </header>

      <main className="flex gap-10 m-auto">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-700 mb-3">Calcule o seu IMC</h1>
          <p className="text-gray-500 mb-3">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>
          <Input
          type="text"
          value={height} 
          onChange={e => setHeight(e.target.value)}
          />
          <Input
          type="text"
          value={weight} 
          onChange={e => setWeight(e.target.value)}
          />
          <button className="block w-full bg-blue-300 p-2 mt-3 rounded-md">Calcular</button>
        </div>

        <div className="flex-1">
          cards
        </div>
      </main>
    </div>  
  );
};
