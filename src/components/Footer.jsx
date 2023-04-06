import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function ContainerFooter() {
  return (
    <Container>
      <Container className="text-center">
        <h4 className="mt-5">Todos los derechos reservados</h4>
      </Container>

      <Button className="mt-5" variant="primary">
        <Badge bg="warning" text="dark">
          Más fotos de animales
        </Badge>
      </Button>
    </Container>
  );
}

export default ContainerFooter;

// function ButtonExample() {
//   return (
//     <Button variant="primary">
//       Profile <Badge bg="secondary">9</Badge>
//       <span className="visually-hidden">unread messages</span>
//     </Button>
//   );
// }

// export default ButtonExample;
