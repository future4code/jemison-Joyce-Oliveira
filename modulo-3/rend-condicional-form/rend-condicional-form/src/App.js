import React, { Component } from 'react';
import './App.css';




function App() {
  return (
    <form>
     <label>
      Nome:
      <input type="text" name="name" />
      </label>

      <label>
      Idade:
      <input type="text" name="idade" />
      </label>

      <label>
      E-mail:
      <input type="text" name="email" />
      </label>

      <label>
      Qual o seu curso?:
      <input type="text" name="curso" />
      </label>

      <label>
      Qual a unidade de ensino?:
      <input type="text" name="ensino" />
      </label>

      <label>
      Por que você não terminou um curso de graduação?
      <input type="text" name="terminou" />
      </label>

  </form>
  
  );
}

export default App;
