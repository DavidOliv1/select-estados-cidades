import { useEffect, useState } from 'react';

interface ICidade {
  id: number;
  nome: string;
}

export default function useCidades({ uf }: { uf: string }) {
  const [cidades, setCidades] = useState<ICidade[]>([]);

  useEffect(() => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
    )
      .then((r) => r.json())
      .then((data) => setCidades(data));
  }, [uf]);

  return { cidades };
}
