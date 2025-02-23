import { useState } from 'react';
import './JogoSorteio.css';


function JogoSorteio() {
  
  const figuras = [
   "/Figuras/openmoji--alien.svg",
   "/Figuras/openmoji--american-football.svg",
   "/Figuras/openmoji--apple.svg",
   "/Figuras/openmoji--automobile.svg",
   "/Figuras/openmoji--basketball.svg",
   "/Figuras/openmoji--bear.svg", 
   "/Figuras/openmoji--beating-heart.svg", 
   "/Figuras/openmoji--beer-mug copy.svg",
   "/Figuras/openmoji--beer-mug.svg",
   "/Figuras/openmoji--billed-cap.svg", 
   "/Figuras/openmoji--birthday-cake.svg", 
   "/Figuras/openmoji--blossom.svg",
   "/Figuras/openmoji--bone.svg",
   "/Figuras/openmoji--boxing-glove.svg", 
   "/Figuras/openmoji--brain.svg",
   "/Figuras/openmoji--bullseye.svg", 
   "/Figuras/openmoji--cactus.svg",
   "/Figuras/openmoji--camera.svg", 
   "/Figuras/openmoji--cancer.svg", 
   "/Figuras/openmoji--carpentry-saw.svg", 
   "/Figuras/openmoji--carrot.svg", 
   "/Figuras/openmoji--chequered-flag.svg",
  ];

  const [figuraSorteada, setFiguraSorteada] = useState("");

  const sorteiaFigura = () => {
    const figuraAleatoria = Math.floor(Math.random() * figuras.length);
    setFiguraSorteada(figuras[figuraAleatoria]);
  };

  const reiniciaSorteio = () => {
    setFiguraSorteada("");
  }

  return (
    <div className='fundo-sorteio'>
      <link rel="stylesheet" href="style.css" />
      <h1>Sorteio de Figuras</h1>
      <button onClick={sorteiaFigura} className='botao-sorteio'>Vai lá!!!</button>

      {figuraSorteada !== "" ? (
        <div>
          <h2>Figura Sorteada:</h2>
          <img src={figuraSorteada} alt="Figura Sorteada" className='imagem-sorteada'/>
        </div>
      ) : (
    
         <p>Nenhuma figura foi sorteada ainda!!</p>
      )}

      <button onClick={reiniciaSorteio} className='botao-reinicia'><b>Zera tudo!!!</b></button>
      </div>
  );
}

export default JogoSorteio;
