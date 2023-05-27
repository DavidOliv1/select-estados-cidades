import './App.css';
import useEstados from './hooks/useEstados';
import useCidades from './hooks/useCidades';
import { useState } from 'react';

function App() {
  const { estados } = useEstados();
  const [selectEstado, setSelectEstado] = useState('');
  const { cidades } = useCidades({ uf: selectEstado });

  const handleUpdateEstado = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectEstado(e.target.value);
  };

  return (
    <div>
      <select onChange={handleUpdateEstado}>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
      <select>
        {cidades.map((cidade) => (
          <option key={cidade.id}>{cidade.nome}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
