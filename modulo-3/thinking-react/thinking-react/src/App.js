import React from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import {produtos} from './MockDeDados'


function App() {
  return (
    <div className="App">
      <ListaDeProdutos meuTeste={produtos}/>
    </div>
  );
}

export default App;
