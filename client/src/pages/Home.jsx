import { Button, Container } from 'react-bootstrap'

export function Home(){
    return(
        <Container>
            <Button href='#' variant="dark">Área do Cliente</Button>
            <Button href='/getItems' variant="dark">Gerenciar cardápio</Button>
        </Container>
    )
}