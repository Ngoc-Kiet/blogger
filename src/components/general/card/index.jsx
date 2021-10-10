import React from 'react'
import { Card } from 'react-bootstrap'

function ItemCard(props) {
    const namePath = `/blog/${ props.img }.png`
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={namePath} />
            <Card.Body>
                <Card.Title className ="text-center">{ props.title }</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ItemCard