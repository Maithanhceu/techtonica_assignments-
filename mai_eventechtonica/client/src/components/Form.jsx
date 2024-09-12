import React, { useState, useEffect } from 'react';
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {

    // This is the initial state with an empty event or the editing event
    const [event, setEvent] = useState(editingEvent || {
        name: "",
        event_date: "",
        event_location: "",
    });

    // Functions to handle user input
    const handleNameChange = (e) => {
        const name = e.target.value;
        setEvent((prevEvent) => ({ ...prevEvent, name }));
    };

    const handleDateChange = (e) => {
        const event_date = e.target.value;
        setEvent((prevEvent) => ({ ...prevEvent, event_date }));
    };

    const handleLocationChange = (e) => {
        const event_location = e.target.value;
        setEvent((prevEvent) => ({ ...prevEvent, event_location }));
    };

    const clearForm = () => {
        setEvent({ name: "", event_date: "", event_location: "" });
    };

    // Function to handle the POST request for a new event
    const postEvent = (newEvent) => {
        return fetch("http://localhost:8080/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        })
            .then((response) => response.json())
            .then((data) => {
                onSaveEvent(data);
                clearForm();
            });
    };

    // Function to handle the PUT request for updating an existing event
    const putEvent = (toEditEvent) => {
        return fetch(`http://localhost:8080/api/events/${toEditEvent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditEvent),
        })
            .then((response) => response.json())
            .then((data) => {
                onUpdateEvent(data);
                clearForm();
            });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (event.id) {
            putEvent(event);
        } else {
            postEvent(event);
        }
    };

    return (
        <Form className='form-events' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Event Name</Form.Label>
                <input
                    type="text"
                    id="add-event-name"
                    placeholder="Event Name"
                    required
                    value={event.name}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Event Date</Form.Label>
                <input
                    type="date"
                    id="add-event-date"
                    placeholder="Event Date"
                    required
                    value={event.event_date}
                    onChange={handleDateChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Event Location</Form.Label>
                <input
                    type="text"
                    id="add-event-location"
                    placeholder="Event Location"
                    required
                    value={event.event_location}
                    onChange={handleLocationChange}
                />
            </Form.Group>
            <Form.Group>
                <Button type="submit" variant="outline-success">{event.id ? "Edit Event" : "Add Event"}</Button>
                {event.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};

export default MyForm;
