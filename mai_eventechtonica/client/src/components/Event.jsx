import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Events = ({event, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateEvent) => {
        toUpdate(toUpdateEvent)
    }

    const onDelete = (toDeleteEvent) => {
        toDelete(toDeleteEvent)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(event)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(event)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Events;