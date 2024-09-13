import React, { useState, useEffect } from 'react';
import * as ioicons from 'react-icons/io5';
import MyForm from './Form';
import Events from './Event';
import './ListEvents.css';
import SearchMonth from './SearchMonth';

const ListEvents = () => {
    // State for storing the list of events
    const [event, setEvent] = useState([]);

    // State for handling the event currently being edited
    const [editingEvent, setEditingEvent] = useState(null);

    // State for filtering by month
    const [filteredEvent, setFilteredEvents] = useState([]);

    // Function to fetch the list of events from the server
    const loadEvents = () => {
        fetch("http://localhost:8080/events")
            .then((response) => response.json())
            .then((data) => {
                setEvent(data);
                setFilteredEvents(data);
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

    // Function to filter by selected month
    const handleSearchMonth = (month) => {
        if (month) {
            const filtered = event.filter(item => {
                const date = new Date(item.event_date);
                const eventYear = date.getFullYear();
                const eventMonth = String(date.getMonth() + 1).padStart(2, '0');
                const formattedDate = `${eventYear}-${eventMonth}`; // Fixed formatting
                return formattedDate === month;
            });
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents(event);
        }
    };

    return (
        <div className="mybody">
            <div className="list-events">
                <h2>Upcoming Events</h2>
                <ul>
                    {/* what I added outside of Cristina's code  */}
                    <SearchMonth onMonthChange={handleSearchMonth} />
                    {filteredEvent.map((item) => (
                        <li key={item.id}>
                            <Events event={item} 
                                    toDelete={onDelete} 
                                    toUpdate={onUpdate} />
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
