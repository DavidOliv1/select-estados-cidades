import { useEffect, useState } from 'react';

interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

interface IRegiao {
  id: number;
  sigla: string;
  nome: string;
}

export default function useEstados() {
  const [estados, setEstados] = useState<IEstado[]>([]);

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    )
      .then((r) => r.json())
      .then((data) => setEstados(data));
  }, []);

  return { estados };
}
