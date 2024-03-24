import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [tarea, setTarea] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tarea.trim() === "") {
      alert("La tarea está vacía");
      return;
    }
    await axios.post("http://localhost:4002/api/listas/crear-tarea",{tarea})
    .then(res=> window.location.reload())

  };
  // const borrarTarea = nombreTarea => {
  //   const arregloFiltrado = arrayTareas.filter(
  //     elementoTarea => elementoTarea !== nombreTarea
  //   );
  //   setArrayTareas(arregloFiltrado);
  // };
  

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese su Tarea..."
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            minLength={5}
            maxLength={100}
            

          />
          <Button type="submit" className="m-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      
      
    </section>
  );
};

export default Formulario;
