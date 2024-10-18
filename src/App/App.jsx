import ContainerEsquerda from "../ContainerFilho-esquerda/ContainerEsquerda";
import ContainerDireita from "../ContainerFilho-direita/ContainerDireita";
import "./App.css";

const App = () => {
  return (
    <div className="container-geral">
      <ContainerEsquerda />
      <ContainerDireita />
    </div>
  );
};

export default App;
