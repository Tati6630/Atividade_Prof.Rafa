/**Calculadora de IMC
Desenvolva uma calculadora de Índice de Massa Corporal (IMC) que receba peso e altura e retorne o IMC 
e a classificação (ex: abaixo do peso, normal, sobrepeso). **/

import { useState } from "react";
import "./CalculadoraIMC.css";
import { useNavigate } from "react-router-dom";

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const calcularIMC = () => {
    const pesoValor = parseFloat(peso);
    const alturaValor = parseFloat(altura) / 100;

    if (!pesoValor || !alturaValor) {
      setErro(
        "Por favor, insira valores válidos (numéricos) para peso e altura."
      );
      setImc(null);
      setClassificacao("");
      return;
    }

    setErro("");
    const valorIMC = (pesoValor / (alturaValor * alturaValor)).toFixed(2);
    setImc(valorIMC);
    setClassificacao(classificarIMC(valorIMC));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else return "Obesidade";
  };

  return (
    <div className="calculadora">
      <h1>Calculadora de IMC</h1>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="input"
      />

      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="input"
      />
      <button onClick={calcularIMC} className="botao">
        Calcular
      </button>
      {erro && <p className="erro">{erro}</p>}
      {imc && (
        <div className="resultado">
          <p className="imc">IMC: {imc}</p>
          <p className="classificacao">{classificacao}</p>
        </div>
      )}
      <button onClick={() => navigate("/")} className="botao-voltar">
        Voltar
      </button>
    </div>
  );
};

export default CalculadoraIMC;
