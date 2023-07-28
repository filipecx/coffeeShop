import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Home(){
    return(
        <Container className='d-flex justify-content-center'>          
            <Button href='#' variant="dark" className='m-5'>Área do Cliente</Button>      
            <Link to={'/getItems'}>
                <Button variant="dark" className='m-5'>Gerenciar cardápio</Button>
            </Link>          
        </Container>
    )
}