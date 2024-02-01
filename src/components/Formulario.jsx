import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import { useState } from "react";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (tarea.trim() === "") {
      alert("La tarea está vacía");
      return;
    }

    setArrayTareas([...arrayTareas, tarea]);
    setTarea("");
  };
  const borrarTarea = nombreTarea => {
    const arregloFiltrado = arrayTareas.filter(
      elementoTarea => elementoTarea !== nombreTarea
    );
    setArrayTareas(arregloFiltrado);
  };
  

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
            className="bg-gray"

          />
          <Button type="submit" className="m-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <Lista arrayTareas={arrayTareas}
        borrarTarea={borrarTarea}>
      </Lista>
    </section>
  );
};

export default Formulario;
