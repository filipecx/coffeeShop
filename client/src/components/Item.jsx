import { Button, Card } from 'react-bootstrap'

export function Item({nomeDoItem, descricaoItem, precoItem}){
    return(
        <>
            <Card className="h-75">
                <Card.Img variant='top' src='#' height='200px' style={{objectFit: 'cover'}}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between 
                    align-items-baseline mb-4'>
                        {nomeDoItem}
                    </Card.Title>
                    <div className='mt-auto'>
                        <p>{descricaoItem}</p>
                        <p>{precoItem}</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

