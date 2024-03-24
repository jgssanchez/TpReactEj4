import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Lista from './components/Lista';

const  App =() => {
  const [tareas,setTareas] = useState([])
  useEffect(()=>{
    const obtenerTareas= async()=>{
      const {data} = await axios.get('https://lista-tareas-backend-eosin.vercel.app/api/listas/mostrar-tareas');
      setTareas(data)
    }
    obtenerTareas();
  },[])
  return (
    <>
    <main>
      <Container className='mt-4 py-5 text-light'>
        <h1 className='text-center'>BIENVENIDO</h1>
        <h3>Ingresa tus tareas</h3>
        <Formulario/>
        <Lista arrayTareas={tareas}/>

        
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
