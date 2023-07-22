import { NavLink } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

export function Navegas(){
    return(
        <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}