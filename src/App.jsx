import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';

const  App =() => {
  return (
    <>
    <main>
      <Container className='mt-4 py-5 text-light'>
        <h1 className='text-center'>BIENVENIDO</h1>
        <h3>Ingresa tus tareas</h3>
        <Formulario ></Formulario>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
