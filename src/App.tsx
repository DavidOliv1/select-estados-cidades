import './App.css';
import useEstados from './hooks/useEstados';
import useCidades from './hooks/useCidades';

function App() {
  const { estados } = useEstados();
  const { cidades } = useCidades({ uf: 'se' });
  return (
    <div>
      <select>
        {estados.map((estado) => (
          <option key={estado.id}>{estado.nome}</option>
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
