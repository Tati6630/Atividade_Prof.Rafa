/*O Grande Avisador**
Crie um componente que apresenta inicialmente apenas um botão. Quando clicado esse botão faz aparecer a mensagem "Celulares 
e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA." 
Essa mensagem deve ser exibida usando renderização condicional.*/
import { useState } from "react"
import { IoWarning } from "react-icons/io5";
import "./OGrandeAvisador.css";
import { useNavigate } from "react-router-dom";

 

const OGrandeAvisador = () => {
    const [pontuacao, setPontuacao] = useState ("");
    const navigate = useNavigate ();

    const tirarPonto = () => {
        if (pontuacao > -10) {
            setPontuacao(pontuacao - 1);

        }
    };

return (
    <div className="aviso">
        <div className="titulo"> Pontuação Sprint</div>
            <h1 className="ponto">{pontuacao}</h1>
    <button onClick={tirarPonto} className="botao-aviso">
    <IoWarning className="icon-aviso" fontSize={40}/>
        AVISO!!! 
    </button>
    {pontuacao < 0 && (
        <p className="mensagem-aviso">
          Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.  
        </p>
    )}
    <button onClick={() => navigate("/")} className="botao-voltar">
        Voltar
    </button>
    </div>
);
};

export default OGrandeAvisador;