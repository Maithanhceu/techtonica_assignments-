import React from 'react';
import Card from 'react-bootstrap/Card';
import './Event.css'
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
            <Card.Text> <span className="bold-and-colored">Event Description: </span>{event.event_description}</Card.Text>
            <Card.Text> <span className="bold-and-colored">Event Location: </span>{event.event_location}</Card.Text>
            {/* Add in text for the icons to help with screen readers */}
            <Button variant="outline-danger" onClick={()=>{onDelete(event)}} style={{padding: '0.6em', marginRight:'0.9em'}}> Delete Event <ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(event)}} style={{padding: '0.6em'}}> Edit Event <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Events;