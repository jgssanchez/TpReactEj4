import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Lista = ({arrayTareas,borrarTarea}) => {
  return (
    <ListGroup className="py-3">
      {
        arrayTareas.map((tarea,posicion)=> <ItemTarea key={posicion} tarea={tarea} borrarTarea={borrarTarea} ></ItemTarea>)
      }
    </ListGroup>
  );
}

export default Lista;