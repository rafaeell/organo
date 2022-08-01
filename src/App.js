import Banner from './componentes/Banner';
import Content from './componentes/Content';
import Rodape from './componentes/Rodape';
import Formulario from './componentes/Formulario';
import UsuarioProvider from './contexts/Usuario';
import '@material/react-material-icon/dist/material-icon.css';

function App() {


  return (
    <div className="App">
      <Banner />
        <UsuarioProvider>
          <Formulario />
          <Content />
        </UsuarioProvider>
    <Rodape />
    </div>
  );
}

export default App;
