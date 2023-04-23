import './App.css';
import chalaLogo from './imagenes/chala.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

    const [ input, setInput] = useState('0');

    const agregarInput = val =>{
        setInput( input + val );
    };

    const calcularResultado = () => {
        if(input){
         setInput(evaluate(input));    
        }else{
            alert('Por favor ingrese un valor..')
        }
       
    };

  return (
    <div className="App">
      <div className='chala-logo-contenedor'>
      <img 
          src={chalaLogo}
          className='chala-logo'
          alt='Logo de Chala' />
      </div>
      <div className='contenedor-calculadora'>

      <Pantalla input={input}/>

      <div className='fila'>
          <Boton manejarClick={agregarInput} >1</Boton>
          <Boton manejarClick={agregarInput} >2</Boton>
          <Boton manejarClick={agregarInput} >3</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
      </div>
      <div className='fila'>
          <Boton manejarClick={agregarInput} >4</Boton>
          <Boton manejarClick={agregarInput} >5</Boton>
          <Boton manejarClick={agregarInput} >6</Boton>
          <Boton manejarClick={agregarInput} >-</Boton>
      </div>
      <div className='fila'>
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
      </div>
      <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
          <Clear manejarClear={()=> setInput('')}>Clear</Clear>
      </div>
      </div>
      </div>
  );
}

export default App;
