import './App.css';
import Header from './components/Header.jsx'
import Cards from './components/Card'
import Footer from './components/Footer';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header main='GALERIA DE IMAGENES CON REACT' />
      <Container>
        <Row>
          <Col>
      <Cards img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/250px-Common_Kingfisher_Alcedo_atthis.jpg' title='MARTIN PESCADOR' text='pájaro' />
      </Col>
      <Col>
      <Cards img='https://i.ibb.co/nrYVDTz/tigre.png' title='TIGRE' text='carnívoro' />
      </Col>
      <Col>
      <Cards img='https://i.ibb.co/St6vWCP/elephant.jpg' title='ELEFANTE' text='abrevadero' />
      </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
