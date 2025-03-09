import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import JogoSorteio from './Componentes/JogoSorteio/JogoSorteio';
import HomePage from './Componentes/HomePage/HomePage';
import OGrandeAvisador from './Componentes/OGrandeAvisador/OGrandeAvisador';
import ConversorTemperatura from './Componentes/ConversorTemperatura/ConversorTemperatura';
import ConversorMoedas from './Componentes/ConversorMoedas/ConversorMoedas';
import ConversorDistancia from './Componentes/ConversorDistancia/ConversorDistancia';
import CalculadoraIMC from './Componentes/CalculadoraIMC/CalculadoraIMC';


function App(){
  const router = createBrowserRouter ([
    { path: "/", element: <HomePage />},
    { path: "/JogoSorteio", element: <JogoSorteio /> },
    { path: "/OGrandeAvisador", element: <OGrandeAvisador />},
    { path: "/ConversorTemperatura", element:<ConversorTemperatura />},
    { path: "/ConversorMoedas", element:<ConversorMoedas />},
    { path: "/ConversorDistancia", element:<ConversorDistancia />},
    { path: "/CalculadoraIMC", element:<CalculadoraIMC />},
    

  ]);

 
  return <RouterProvider router={router} />;
   
  
       
}

export default App;

