import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

    return (
        <>
            <Navbar bg="light" variant="light" className='Nav'>
                <Navbar.Brand href="#inicio">Prototipo de TransFormando</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#marcoLegal">Marco Legal</Nav.Link>
                    <Nav.Link href="#tituloHospitales">Salubridad</Nav.Link>
                    <Nav.Link href="#foro">Foro</Nav.Link>
                    <Nav.Link href="#soporte">Soporte</Nav.Link>
                    <Nav.Link href="#pie">Habla con Nosotres</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;