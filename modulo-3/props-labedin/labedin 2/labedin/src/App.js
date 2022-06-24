import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno.js/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://shocking-argument.surge.sh/static/media/eu.a05be789c735732f0e3c.jpg" 
          nome="Joyce Oliveira" 
          descricao="Oi, eu sou a Joyce. Estudante da Labenu. Estou gostando muito do curso, mas já estou prevendo que vou quebrar muito a cabeça para resolver as atividades de React, ainda bem que posso contar com o apoio da equipe para me ajudar a resolver bugs e conseguir avançar com os estudos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="card">
      <div className="card-container">
        <CardPequeno
          
          nome="E-mail" 
          descricao="joycerebeca4@gmail.com" 
        />
        

        <CardPequeno
          
          nome="Endereço" 
          descricao="Ipatinga/MG" 
          />
          </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
    </div>
  );
}

export default App;
