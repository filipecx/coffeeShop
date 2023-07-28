import { Button } from 'react-bootstrap'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { ItemContext } from '../pages/Cardapio'

export function Botao({item}){
    const {listOfItems, setListOfItems} = useContext(ItemContext)

    function deletar(){
       
        try{
            setListOfItems(listOfItems.filter(itens => itens._id != item))
            Axios.delete('http://localhost:3001/deleteItem', {
                params: {id: item}
            })
           
        }catch(err){
            console.log(err)
        }
        

    }
    
    return(
        
        <Button variant='dark' onClick={deletar}>
            DELETE
        </Button>
    )
}