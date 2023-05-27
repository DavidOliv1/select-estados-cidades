import './App.css';
import useEstados from './hooks/useEstados';

function App() {
  const { estados } = useEstados();
  return (
    <div>
      <select>
        {estados.map((estado) => (
          <option key={estado.id}>{estado.nome}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
