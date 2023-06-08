import styled from 'styled-components';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import TimePicker from 'react-time-picker';
import bckImage from '../Media/pexels.jpeg';

export const CalendarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-image: linear-gradient(rgb(0 0 0 / 50%), rgba(0, 0, 0, 0.5)), url(${bckImage});
    background-size: cover;
    background-position: center;
`;

export const StyledCalendar = styled(Calendar)`
width: 70%;

.react-calendar {
  font-family: Arial, sans-serif;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
  box-sizing: border-box;
}
.react-calendar__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.react-calendar__navigation button {
  color: #FFF;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
    background-color: rgb(0 0 0 / 42%);
}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  color: #888;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.react-calendar__month-view__weekdays__weekday {
  flex: 1;
  padding: 5px;
}
.react-calendar__tile {
  line-height: 40px;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 0%;
  transition: background-color 0.2s ease;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  ;
}

.react-calendar__tile--active {
  background-color: red;
  color: #fff;
}

.react-calendar__tile--active:hover,
.react-calendar__tile--active:focus {
  background-color: #ccc;
}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75rem;
  color: #FFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.react-calendar__month-view__weekdays__weekday {
  flex: 1 1 0%!important;
  padding: 5px;
}

.react-calendar__tile--hasEvent {
  background-color: #f0f0f0;
}

`;

export const StyledModal = styled(Modal)`
  background-color: #f5f5f5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

export const ModalContent = styled.div`
  background-color: rgb(219 215 215 / 47%);
  padding: 20px;
  display: flex;
`;

export const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  color: #666;
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  background-color: #f9f9f9;
  border: none;
  padding: 5px;
  color: #333;
  width: 40%;
  margin-bottom: 10px;
`;

export const FormTextarea = styled.textarea`
  background-color: #f9f9f9;
  border: none;
  padding: 5px;
  color: #333;
  width: 40%;
  height: 90px;
  resize: none;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export const CustomTimePicker = styled(TimePicker)`
  .react-time-picker__inputGroup {
    width: 400px;
  }

  .react-time-picker__inputGroup__input {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: #666;
    background-color: #f9f9f9;
    width: 102px!important;
  }
`;

export const EventDiv = styled.div`
  width: 50%;
`;

export const EventForm = styled.div`
  width: 50%;
`;

export const EventList = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #fff;
`;

export const EventTitle = styled.strong`
  font-weight: bold;
  color: #333333;
`;

export const EventDescription = styled.span`
  display: block;
  color: #666666;
`;

export const EventTime = styled.span`
  color: #999999;
  margin: 0 10px;
`;

export const EventDate = styled.span`
  color: #999999;
`;