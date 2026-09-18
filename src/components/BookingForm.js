import { useState } from "react"
import FormField from './FormField'

// Formulario de reserva ajustado por Juan Gomez (JJGL)
function BookingForm({ availableTimes, dispatchResDateChange, submitForm }) {

    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const minGuests = 1
    const maxGuests = 10

    const [resDate, setResDate] = useState(minDate);
    const [resTime, setResTime] = useState(availableTimes[0] || '');
    const [resNumGuests, setResNumGuests] = useState(minGuests);
    const [occasion, setOccasion] = useState('Birthday');

    function handleResDateChange(e) {
        setResDate(e.target.value);
        dispatchResDateChange?.(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        submitForm?.({ resDate, resTime, resNumGuests, occasion })
    }

    const isDateValid = new Date(`${resDate}T00:00`) >= new Date(`${minDate}T00:00`)
    const isTimeValid = resTime.length > 0
    const isNumGuestsValid = resNumGuests >= minGuests && resNumGuests <= maxGuests
    const isFormValid = isDateValid && isTimeValid && isNumGuestsValid

    return (
        <form onSubmit={handleFormSubmit} aria-label="Table reservation form">
            <FormField
                hasError={!isDateValid}
                errorMessage={'Please enter a date on or after today'}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    data-testid="date"
                    min={minDate}
                    value={resDate}
                    required
                    onChange={handleResDateChange} />
            </FormField>
            <FormField
                hasError={!isTimeValid}
                errorMessage={'Please enter a valid time'}>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    data-testid="time"
                    value={resTime}
                    required
                    onChange={(e) => setResTime(e.target.value)}>
                    {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                </select>
            </FormField>
            <FormField
                hasError={!isNumGuestsValid}
                errorMessage={`Please enter a value between ${minGuests} and ${maxGuests}`}>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    min={minGuests}
                    max={maxGuests}
                    id="guests"
                    data-testid="guests"
                    required
                    value={resNumGuests}
                    onChange={(e) => setResNumGuests(Number(e.target.value))} />
            </FormField>
            <FormField>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </FormField>
            <button
                id="submit"
                type="submit"
                disabled={!isFormValid}>
                Make your reservation
            </button>
        </form>
    )
}

export default BookingForm;
