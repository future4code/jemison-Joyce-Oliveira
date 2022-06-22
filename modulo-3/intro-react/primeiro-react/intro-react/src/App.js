import minhaFoto from './img/eu.jpg'
import './App.css';

function App() {

  const mensagem = 'Sejam bem-vindos, prazer meu nome é Joyce!'
  const botao =()=>{
    alert('Boa noite!')
  }

  return (

    <div className="App">
      <h1>{mensagem}</h1>
      <img src={minhaFoto} className='eu' alt='minha foto'/>
      <p>Para saber mais clique no botão abaixo:</p>
      <button onClick={botao}>Clique aqui!</button>
    </div>
  );
}

export default App;
