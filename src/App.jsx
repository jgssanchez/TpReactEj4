import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';

const  App =() => {
  return (
    <>
      <Container className='mt-4 py-5 text-light'>
        <h1 className='text-center'>BIENVENIDO</h1>
        <h3>Ingresa tus tareas</h3>
        <Formulario ></Formulario>
      </Container>
    </>
  )
}

export default App
