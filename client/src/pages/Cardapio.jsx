import { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap"
import Axios from 'axios'
import { Item } from '../components/Item'

export function Cardapio(){
    const [listOfItems, setListOfItems] = useState([])
    useEffect(() => {
    Axios.get('http://localhost:3001/getItems').then((response) => {
      setListOfItems(response.data)
    })
    }, [])
  
    return(
        <>
            <Row md={2} xs={1} lg={3} className="g-3">
                {listOfItems.map(item => (
                    <Col key={item._id}>
                        <Item {...item}/>
                    </Col>
                ))}
            </Row>
       </>
    )
}