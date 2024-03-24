import axios from "axios";
import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({tarea, id}) => {
  const handleDelete = async()=>{
    const {data} = await axios.delete(`http://localhost:4002/api/listas/borrar-tarea/${id}`).then(res=>window.location.reload())
    
    console.log(data);
  }
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea} 
      <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;