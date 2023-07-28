import React, { useState } from 'react';
import  Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


export function ItemForm(){
    const [nomeDoItem, setNomeItem] = useState('');
    const [descricaoItem, setDescricaoItem] = useState('');
    const [precoItem, setPrecoItem] = useState('');
    const [img, setImg] = useState('')
    const navigate = useNavigate()

    
    const mandaItem = async (e) => {
        e.preventDefault
        const formData = new FormData()
        formData.append('nomeDoItem', nomeDoItem)
        formData.append('descricaoItem', descricaoItem)
        formData.append('precoItem', precoItem)
        formData.append('file', img)
               
        await Axios.post('http://localhost:3001/createItem', formData, {
            headers: {
            "Content-Type": `multipart/form-data`
            }})
           
        .then(function (response){
            
            console.log(`A resposta ${response}`)
        })
        .catch(function(error){
            console.log(error.response)
        })
        navigate('/getItems')
    }
    return(
        <Form onSubmit={mandaItem} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="formBasicNomeItem">
                <Form.Label>Nome do item</Form.Label>
                <Form.Control placeholder={'Digite o nome do item '} onChange={(e) => setNomeItem(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescricao">
                <Form.Label>Descricao do item</Form.Label>
                <Form.Control placeholder={'Digite a descrição do item'} onChange={(e) => setDescricaoItem(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecoItem" >
                <Form.Label>Preço do item</Form.Label>
                <Form.Control placeholder={'Digite o preço do item'} onChange={(e) => setPrecoItem(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Imagem do item</Form.Label>
                <Form.Control type='file' onChange={(e) => setImg(e.target.files[0])} id='file' name='file' />
            </Form.Group>
            <Button type='submit' variant='dark'>
                Enviar
            </Button>
            <Link to={'/getItems'} >
                <Button variant='dark'>Voltar</Button>
            </Link>
        </Form>
    )
}