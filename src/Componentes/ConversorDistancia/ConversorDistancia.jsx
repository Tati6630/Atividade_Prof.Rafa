/**Conversor de Distância
Crie um componente que converta distâncias entre metros, quilômetros, milhas e pés. */

import { useState } from "react";
import "./ConversorDistancia.css";
import { useNavigate } from "react-router-dom";

const ConversorDistancia = () => {
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("Metros");
  const [saida, setSaida] = useState("Milhas");
  const navigate = useNavigate ();

  const converterDistancia = (valor, entrada, saida) => {
    if (valor === "" || isNaN(valor)) {
      return "";
    }
    let distancia = parseFloat(valor);

    if (entrada === saida) {
      return distancia;
    } else if (entrada === "Metros" && saida === "Quilômetros") {
      return (distancia / 1000);
    } else if (entrada === "Metros" && saida === "Milhas") {
      return (distancia / 1609);
    } else if (entrada === "Metros" && saida === "Pés") {
      return (distancia * 3.281);
    } else if (entrada === "Quilômetros" && saida === "Metros") {
      return (distancia * 1000);
    } else if (entrada === "Quilômetros" && saida === "Milhas") {
      return (distancia / 1.609);
    } else if (entrada === "Quilômetros" && saida === "Pés") {
      return (distancia * 3281);
    } else if (entrada === "Milhas" && saida === "Metros") {
      return (distancia * 1609);
    } else if (entrada === "Milhas" && saida === "Quilômetros") {
        return (distancia * 1.609);
    } else if (entrada === "Milhas" && saida === "Pés") {
        return (distancia * 5280);
    } else if (entrada === "Pés" && saida === "Metros") {
        return (distancia / 3.281);
    } else if (entrada === "Pés" && saida === "Quilômetros") {
        return (distancia / 3281);
    } else if (entrada === "Pés" && saida === "Milhas") {
        return (distancia / 5280);
    } 
  };

  return (
    <div className="conversor">
      <h1>Conversor de Distância</h1>
      <div className="input">
      <input type="number" placeholder="Digite o valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      </div>
      <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
        <option value="Metros">Metros</option>
        <option value="Quilômetros">Quilômetros</option>
        <option value="Milhas">Milhas</option>
        <option value="Pés">Pés</option>
      </select>
      <span> para </span>
      <select value={saida} onChange={(e) => setSaida(e.target.value)}>
        <option value="Metros">Metros</option>
        <option value="Quilômetros">Quilômetros</option>
        <option value="Milhas">Milhas</option>
        <option value="Pés">Pés</option>
      </select>
      <h2>Resultado: {converterDistancia(valor, entrada, saida)}</h2>
      <button onClick={() => navigate("/")} className="botao-voltar">
        Voltar
    </button>
    </div>
  );
};

export default ConversorDistancia;




