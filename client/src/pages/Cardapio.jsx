import React from 'react'
import { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from "react-bootstrap"
import Axios from 'axios'
import { Item } from '../components/Item'
export const ItemContext = createContext('Default')

export function Cardapio(){
    const [listOfItems, setListOfItems] = useState([])
    useEffect(() => {
    Axios.get('http://localhost:3001/getItems').then((response) => {
      setListOfItems(response.data)
    })
    }, [])
  
    return(
        <>  
            <div>
                {listOfItems.length > 1  || listOfItems.length == 0 ? <h1>Você possui {listOfItems.length} em seu cardápio</h1>: <h1>Você possui {listOfItems.length} item em seu cardápio</h1>}
                <h2>Deseja adicionar algum item?</h2>
                <Link  to={'/createItem'}>
                    <Button variant='dark' className='mb-3'>Adicionar item</Button>
                </Link>
            </div>
            <Row md={2} xs={1} lg={4} className="g-3">
                <ItemContext.Provider value={{listOfItems, setListOfItems}}>              
                    {listOfItems.map(item => (
                        <Col key={item._id}>
                            <Item {...item}/>
                        </Col>
                    ))}
                 </ItemContext.Provider>
            </Row>
       </>
    )
}