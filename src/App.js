import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
import { config } from '@fortawesome/fontawesome-svg-core';


const app = () =>{
  //obtenemos las tareas guardadas en el storqage 
  
  const tareasGuardadas=
  localStorage.getItem('tareas')?
  JSON.parse(localStorage.getItem('tareas')) : [];

// establecer el estadi de las tareas

const [tareas, cambiarTareas] = useState(tareasGuardas);

//Guardar el estado dentro de localStorage 

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  let configMostrarCompletadas= '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas= localStorage.getItem('mostrarCompletadas') === true;
  }


  
  
  
  
  
  
const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

useEffect(() => {
  localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
}, [tareas]);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas = {tareas} cambiarTareas = {cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  )
}

export default App;
