
import { Level } from '@/types/Level';

export const levels: Level[] = [
  { title: 'Magreza', color:'#96a3ab', icon:'down', imc:[0, 18.4] },
  { title: 'Normal', color:'#0ead69', icon:'up', imc:[18.5, 24.9] },
  { title: 'Sobrepeso', color:'#e2b039', icon:'down', imc:[25, 29.9] },
  { title: 'Obesidade', color:'#c3423f', icon:'down', imc:[30, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for(let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = imc;

      return levels[i];
    };
  };

  return null;
};