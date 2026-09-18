import BookingForm from '../components/BookingForm'
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api'
import './Booking.css'

function Booking() {
    const navigate = useNavigate();
    const updateTimes = (times, resDate) => fetchAPI(resDate);
    const initializeTimes = () => fetchAPI(new Date());
    const submitForm = (formData) => {
        if (submitAPI(formData)) navigate('/reservation-confirmation')
    }

    const [availableTimes, dispatchResDateChange] = useReducer(updateTimes, initializeTimes())

    return (
        <>
        <h2>Reserve a Table</h2>
        <BookingForm
            availableTimes={availableTimes}
            dispatchResDateChange={dispatchResDateChange}
            submitForm={submitForm} />
        </>
    );
};

export default Booking;