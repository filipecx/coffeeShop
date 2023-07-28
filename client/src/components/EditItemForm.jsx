import React, { useState, useEffect } from 'react';
import  Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


export function EditItemForm(data){
    const [nomeDoItem, setNomeItem] = useState('');
    const [descricaoItem, setDescricaoItem] = useState('');
    const [precoItem, setPrecoItem] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        setNomeItem(data.state.nome)
        setDescricaoItem(data.state.descricao)
        setPrecoItem(data.state.preco)
    }, [])
    
    const atualizaItem = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:3001/editItem/${data.state.id}`, {
            nomeDoItem: nomeDoItem,
            descricaoItem: descricaoItem,
            precoItem: precoItem,
         
        })
        .then(function (response){
            
            console.log(`A resposta ${response}`)
        })
        .catch(function(error){
            console.log(error.response)
        })
        navigate('/getItems')
    }
    return(
        <Form onSubmit={atualizaItem}>
            <Form.Group className="mb-3" controlId="formBasicNomeItem">
                <Form.Label>Nome do item</Form.Label>
                <Form.Control onChange={(e) => setNomeItem(e.target.value)} value={nomeDoItem}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescricao">
                <Form.Label>Descricao do item</Form.Label>
                <Form.Control  onChange={(e) => setDescricaoItem(e.target.value)} value={descricaoItem}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecoItem" >
                <Form.Label>Preço do item</Form.Label>
                <Form.Control  onChange={(e) => setPrecoItem(e.target.value)} value={precoItem}/>
            </Form.Group>
            <Button type='submit' variant='dark'>
                Enviar
            </Button>
        </Form>
    )
}