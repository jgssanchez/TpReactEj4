import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Lista from './Lista';


const Formulario=()=> {
  return (
    <section> 
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="text" placeholder="Ingrese su Tarea..."  />
        <Button type='submit'className='m-2'>Agregar</Button>
    </Form.Group>
    </Form>
    <Lista></Lista>
    </section>
  );
}

export default Formulario;
