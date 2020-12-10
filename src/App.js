import {useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Citas from './components/Citas'

export default function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const[citas, setCitas] = useState(citasIniciales);

  useEffect(()=>{
    localStorage.setItem('citas', JSON.stringify(citas));
  },[citas]);

  function agregarCita(e){
    setCitas([
      ...citas,
      e
    ]);
  }

  function quitarCita(e){
    setCitas(citas.filter(cita => cita.id !== e));
  }

  return (
    <section className="contenedor">
      <Formulario agregarCita={agregarCita} />
      <Citas citas={citas} quitarCita={quitarCita}/>
    </section>
  );
}