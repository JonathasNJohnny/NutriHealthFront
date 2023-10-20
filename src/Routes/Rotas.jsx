import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import { Container } from "react-bootstrap";

function Rotas() {
  return (
    <Router>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Rotas;
