import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';

const  App =() => {
  return (
    <>
      <Container className='mt-4 py-5'>
        <Formulario ></Formulario>
      </Container>
    </>
  )
}

export default App
