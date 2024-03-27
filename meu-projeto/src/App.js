
import './App.css';

function App() {
  const name = 'Lucas';
  const newname = name.toUpperCase()

  function sun(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h1>Olá React!</h1>
    <p>Meu primeiro app</p>
    <h2>Alterando o JSX</h2>
    <p>Olá, {newname}</p>
    <p>Soma: {sun(3, 5)}</p>
    <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;
