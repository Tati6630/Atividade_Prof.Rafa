/**Conversor de Moedas
Desenvolva um componente que converta valores entre diferentes moedas (ex: Real, Dólar, Euro). 
Utilize uma API de conversão de moedas ou defina taxas de câmbio fixas.*/

import { useState } from "react";
import "./ConversorMoedas.css";
import { useNavigate } from "react-router-dom";

const ConversorMoedas = () => {
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("BRL");
  const [saida, setSaida] = useState("USD");
  const navigate = useNavigate();

  const converterMoeda = (valor, entrada, saida) => {
    if (valor === "" || isNaN(valor)) {
      return "";
    }
    let moedas = parseFloat(valor);

    if (entrada === saida) {
      return moedas;
    } else if (entrada === "BRL" && saida === "USD") {
      return (moedas / 5.91).toFixed(2);
    } else if (entrada === "BRL" && saida === "EUR") {
      return (moedas / 6.12).toFixed(2);
    } else if (entrada === "USD" && saida === "BRL") {
      return (moedas * 5.91).toFixed(2);
    } else if (entrada === "USD" && saida === "EUR") {
      return (moedas * (5.91 / 6.12)).toFixed(2);
    } else if (entrada === "EUR" && saida === "BRL") {
      return (moedas * 6.12).toFixed(2);
    } else if (entrada === "EUR" && saida === "USD") {
      return (moedas * (6.12 / 5.91)).toFixed(2);
    }
  };

  return (
    <div className="conversor">
      <h1>Conversor de Moeda</h1>
      <div className="input">
        <input
          type="number"
          placeholder="Digite o valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
        <option value="BRL">Reais</option>
        <option value="USD">Dólar</option>
        <option value="EUR">Euro</option>
      </select>
      <span> para </span>
      <select value={saida} onChange={(e) => setSaida(e.target.value)}>
        <option value="BRL">Reais</option>
        <option value="USD">Dólar</option>
        <option value="EUR">Euro</option>
      </select>
      <h2>Resultado: {converterMoeda(valor, entrada, saida)}</h2>
      <button onClick={() => navigate("/")} className="botao-voltar">
        Voltar
      </button>
    </div>
  );
};

export default ConversorMoedas;
