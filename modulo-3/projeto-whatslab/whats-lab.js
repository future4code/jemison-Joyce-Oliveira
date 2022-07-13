import './App.css';
import Imagem from "./Labenu.jpg";
import {Pai, AreaLaranja, Cabecalho, AreaMensagem, Rodape} from "./style"; 

function App() {
  return (
    <Pai>
      <Cabecalho><img src={Imagem} alt="Labenu"/><h1>LabZap</h1></Cabecalho>
      <AreaLaranja/>
        <AreaMensagem>
          <form>
            <label name="remetente">Remetente:</label>
            <input type="text" id="remetente" name="remetente"/>
            <label name="mensagem">Msg:</label>
            <input type="text" id="mensagem" name="mensagem"/>
            <button>Enviar Mensagem</button>
          </form>
        </AreaMensagem>
      <AreaLaranja/>
      <Rodape>Copyright © 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150 </Rodape>
    </Pai>
  );
}

export default App;
