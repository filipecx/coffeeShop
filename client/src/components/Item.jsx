import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { Botao } from './Botao'


export function Item({nomeDoItem, descricaoItem, precoItem, _id, imagem}){
    
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagem} height='200px' style={{objectFit: 'cover'}}/>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-baseline'>
                        <span className='fs-2'>{nomeDoItem}</span>
                        <span className='ms-2'>R${precoItem}</span>                     
                        </Card.Title>
                    <Card.Text>
                        {descricaoItem}
                        
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/editItem`} state={{nome: nomeDoItem, descricao: descricaoItem, preco: precoItem, id: _id}}>
                            <Button variant='dark'>EDIT</Button>
                        </Link>                      
                      <Botao item={_id} />
                    </div>         
                </Card.Body>
            </Card>
        </>
    )
}

