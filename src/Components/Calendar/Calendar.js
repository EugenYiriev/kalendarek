import React, { useState } from 'react';
import {
    CalendarWrapper,
    StyledCalendar,
    StyledModal,
    ModalContent,
    ModalTitle,
    FormLabel,
    FormInput,
    FormTextarea,
    SubmitButton,
    CustomTimePicker,
    EventTitle,
    EventDescription,
    EventTime,
    EventDate,
    EventForm,
    EventDiv,
    EventList
} from './CalendarStyle';

function EventModal({
    isOpen,
    eventData,
    setEventData,
    onSubmit,
    onClose,
    previousEvents,
}) {
    const { title, description, time } = eventData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTimeChange = (time) => {
        setEventData((prevData) => ({
            ...prevData,
            time: time,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <StyledModal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
            <ModalContent>
                <EventForm>
                    <ModalTitle>Add Event</ModalTitle>
                    <form onSubmit={handleSubmit}>
                        <FormLabel>
                            <FormInput
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleInputChange}
                                placeholder="Title"
                            />
                        </FormLabel>
                        <FormLabel>
                            <FormTextarea
                                name="description"
                                value={description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </FormLabel>
                        <FormLabel>
                            Time:
                            <CustomTimePicker
                                name="time"
                                value={time}
                                onChange={handleTimeChange}
                            />
                        </FormLabel>
                        <SubmitButton type="submit">Add</SubmitButton>
                    </form>
                </EventForm>

                <EventDiv>
                    {previousEvents.length > 0 && (
                        <div>
                            <h3>Previous Events:</h3>
                            {previousEvents.map((event) => (

                                <EventList key={event.id}>
                                    <EventTitle>{event.title}</EventTitle>
                                    <EventDescription>{event.description}</EventDescription>
                                    <EventDate>{new Date(event.date).toDateString()}</EventDate>
                                    <EventTime>{event.time}</EventTime>
                                </EventList>
                            ))}
                        </div>
                    )}
                </EventDiv>

            </ModalContent>
        </StyledModal>
    );
}

function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventModalOpen, setEventModalOpen] = useState(false);
    const [eventData, setEventData] = useState({
        date: selectedDate,
        title: '',
        description: '',
        time: '',
    });
    const [previousEvents, setPreviousEvents] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleEventClick = (value) => {
        const clickedDate = new Date(value);

        setEventData({
            ...eventData,
            date: clickedDate,
            title: '',
            description: '',
            time: '',
        });

        const previousEvents = getPreviousEventsForDate(clickedDate);

        setPreviousEvents(previousEvents);
        setEventModalOpen(true);
    };

    const handleEventSubmit = () => {
        const newEvent = {
            id: Date.now(),
            title: eventData.title,
            description: eventData.description,
            time: eventData.time,
            date: eventData.date.toISOString(),
        };

        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        const updatedEvents = [...storedEvents, newEvent];

        localStorage.setItem('events', JSON.stringify(updatedEvents));

        setPreviousEvents(updatedEvents);
        setEventModalOpen(false);
    };

    const getPreviousEventsForDate = (date) => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];

        return storedEvents.filter((event) => {
            if (typeof event.date === 'string') {
                return new Date(event.date).toISOString() === date.toISOString();
            }
            return false;
        });
    };

    return (
        <CalendarWrapper>
            <StyledCalendar
                selected={selectedDate}
                onChange={handleDateChange}
                onClickDay={handleEventClick}
            />
            <EventModal
                isOpen={eventModalOpen}
                eventData={eventData}
                setEventData={setEventData}
                onSubmit={handleEventSubmit}
                onClose={() => setEventModalOpen(false)}
                previousEvents={previousEvents}
            />
        </CalendarWrapper>
    );
}

export default CalendarComponent;
