import { useEffect, useState } from 'react';

interface ICidade {
  id: number;
  nome: string;
}

export default function useCidades({ uf }: { uf: string }) {
  const [cidades, setCidades] = useState<ICidade[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) return;
    if (uf === 'UF') {
      return setCidades([]);
    }
    setLoading(true);
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
    )
      .then((r) => r.json())
      .then((data) => setCidades(data))
      .then(() => setLoading(false));
  }, [uf]);

  return { cidades, loading };
}
