import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const  Lista = ({arrayTareas}) => {
  return (
    <ListGroup className="py-3">
      {
        arrayTareas.map((tarea,posicion)=> <ItemTarea key={posicion} tarea={tarea.descripcionTarea} id={tarea._id} ></ItemTarea>)
      }
    </ListGroup>
  );
}

export default Lista;