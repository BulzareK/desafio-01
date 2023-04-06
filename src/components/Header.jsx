import Container from "react-bootstrap/Container";

const ContainerHeader = (props) => {
  return (
    <Container>
      <h1 className="text-center mb-5">{props.main}</h1>
    </Container>
  );
};

export default ContainerHeader;
