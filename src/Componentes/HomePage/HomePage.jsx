import { useNavigate } from "react-router-dom"
import './HomePage.css';


const HomePage = () => {
    const navigate = useNavigate();

    const jogos = [
      { nome: "Sorteio de Figuras", path: "/JogoSorteio", imagem: "/Cards/Sorteio.png" },
      { nome: "O Grande Avisador", path: "/OGrandeAvisador", imagem: "/Cards/Avisador.png" },
      { nome: "Conversor de Temperatura", path: "/ConversorTemperatura", imagem: "/Cards/Temperatura.png" },
      { nome: "Conversor de Moeda", path: "/ConversorMoedas", imagem: "/Cards/Moeda.png" },
      { nome: "Conversor de Distância", path: "/ConversorDistancia", imagem: "/Cards/Medidas.png" },
      { nome: "Calculadora de IMC", path: "/CalculadoraIMC", imagem: "/Cards/IMC.png" },
    ]

  

  return (
    <div className="home-page">
        <h1>Escolhe aí!</h1>
        <div className="cards-container">
          {jogos.map((atividades,index) => (
         <div key={index} className="card" onClick={() => navigate(atividades.path)}>
          <img src={atividades.imagem} alt={atividades.nome} className="card-img" />
          <h3>{atividades.nome}</h3>
         </div> 
        ))}         
        </div>
       
    </div>
  );
};

export default HomePage;

