import Imagem from'./img/home2.gif'
import Imagem2 from'./img/recra.gif'
import './App.css';
import ProfileImage from './Componente/ProfileImage';


function App() {
  return (
    <div className='app'>
<h1>teste</h1>
<ProfileImage
titulo={"imagem teste ilustrativa"}
imagem={Imagem}
alt={"teste"}
/>
<ProfileImage
titulo={"imagem teste ilustrativa"}
imagem={Imagem2}
alt={"teste"}
/>


    </div>
  );
}

export default App;
