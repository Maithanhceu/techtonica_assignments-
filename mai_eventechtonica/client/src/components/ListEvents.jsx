import React, { useState, useEffect } from 'react';
import * as ioicons from 'react-icons/io5';
import MyForm from './Form';
import Events from './Event';

const ListEvents = () => {

    // State for storing the list of events
    const [event, setEvent] = useState([]);

    // State for handling the event currently being edited
    const [editingEvent, setEditingEvent] = useState(null);

    // Function to fetch the list of events from the server
    const loadEvents = () => {
        fetch("http://localhost:8080/events")
            .then((response) => response.json())
            .then((data) => {
                setEvent(data);
            });
    };

    // Use effect to load events on component mount
    useEffect(() => {
        loadEvents();
    }, []);

    // Function to handle saving a new event
    const onSaveEvent = (newEvent) => {
        setEvent((event) => [...event, newEvent]);
    };

    // Function to handle updating an existing event
    const updateEvent = (savedEvent) => {
        loadEvents();
    };

    // Function to handle deleting an event
    const onDelete = (event) => {
        return fetch(`http://localhost:8080/events/${event.id}`, {
            method: "DELETE"
        }).then((response) => {
            if (response.ok) {
                loadEvents();
            }
        });
    };

    // Function to handle setting an event to be edited
    const onUpdate = (toUpdateEvent) => {
        setEditingEvent(toUpdateEvent);
    };

    return (
        <div className="mybody">
            <div className="list-events">
                <h2>Upcoming Events</h2>
                <ul>
                    {event.map((item) => (
                        <li key={item.id}>
                            <Events event={item} toDelete={onDelete} toUpdate={onUpdate}/>
                        </li>
                    ))}
                </ul>
            </div>
            <MyForm
                key={editingEvent ? editingEvent.id : null}
                onSaveEvent={onSaveEvent}
                editingEvent={editingEvent}
                onUpdateEvent={updateEvent}
            />
        </div>
    );
};

export default ListEvents;
