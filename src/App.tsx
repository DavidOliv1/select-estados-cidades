import './App.css';
import useEstados from './hooks/useEstados';
import useCidades from './hooks/useCidades';
import { useState } from 'react';
import { Spinner } from '@chakra-ui/react';

function App() {
  const { estados } = useEstados();
  const [selectEstado, setSelectEstado] = useState('');
  const { cidades, loading } = useCidades({ uf: selectEstado });

  const handleUpdateEstado = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectEstado(e.target.value);
  };

  return (
    <div className="App">
      <select className="select" onChange={handleUpdateEstado}>
        <option>UF</option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>

      {cidades.length > 0 &&
        (loading ? (
          <Spinner />
        ) : (
          <select className="select">
            {cidades.map((cidade) => (
              <option key={cidade.id}>{cidade.nome}</option>
            ))}
          </select>
        ))}
    </div>
  );
}

export default App;
