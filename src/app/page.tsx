'use client';

import { Input } from "@/components/Input/Input";
import { useState } from "react";


export default function Home() {
  const [ height, setHeight ] = useState('');
  const [ weight, setWeight ] = useState('');

  return (
    <div className="max-w-5xl m-auto">
      <header className="mb-5">
        Header
      </header>

      <main className="flex gap-7 m-auto">
        <div className="flex-1">
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde (OMS) para calcular o peso ideal de cada pessoa</p>
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
          <button>Calcular</button>
        </div>

        <div className="flex-1">
          Informações
        </div>
      </main>
    </div>  
  );
};
