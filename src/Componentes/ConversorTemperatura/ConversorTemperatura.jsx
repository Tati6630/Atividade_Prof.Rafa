
import { useState } from "react";
import "./ConversorTemperatura.css";
import { useNavigate } from "react-router-dom";

const ConversorTemperatura = () => {
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("Celsius");
  const [saida, setSaida] = useState("Fahrenheit");
  const navigate = useNavigate ();

  const converterTemperatura = (valor, entrada, saida) => {
    if (valor === "" || isNaN(valor)) {
      return "";
    }
    let graus = parseFloat(valor);

    if (entrada === saida) {
      return graus;
    } else if (entrada === "Celsius" && saida === "Fahrenheit") {
      return (graus * 9) / 5 + 32;
    } else if (entrada === "Celsius" && saida === "Kelvin") {
      return graus + 273.15;
    } else if (entrada === "Fahrenheit" && saida === "Celsius") {
      return ((graus - 32) * 5) / 9;
    } else if (entrada === "Fahrenheit" && saida === "Kelvin") {
      return ((graus - 32) * 5) / 9 + 273.15;
    } else if (entrada === "Kelvin" && saida === "Celsius") {
      return graus - 273.15;
    } else if (entrada === "Kelvin" && saida === "Fahrenheit") {
      return ((graus - 273.15) * 9) / 5 + 32;
    }
  };

  return (
    <div className="conversor">
      <h1>Conversor de Temperatura</h1>
      <div className="input">
      <input type="number" placeholder="Digite o valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      </div>
      <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <span> para </span>
      <select value={saida} onChange={(e) => setSaida(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <h2>Resultado: {converterTemperatura(valor, entrada, saida)}</h2>
      <button onClick={() => navigate("/")} className="botao-voltar">
        Voltar
    </button>
    </div>
  );
};

export default ConversorTemperatura;




