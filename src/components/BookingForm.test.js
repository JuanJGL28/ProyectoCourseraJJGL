import { fireEvent, render, screen, within } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['1:00', '2:00', '3:00'];

test('Renders the BookingForm heading', () => {
    render(
        <BookingForm availableTimes={availableTimes} />
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('Initial values of available times', () => {
    render(
        <BookingForm availableTimes={availableTimes} />
    );
    const timeInput = screen.getByLabelText('Choose time')
    const timeOptions = within(timeInput).getAllByRole("option");
    expect(timeOptions.length).toBe(3);
})

test('Confirm form attributes', () => {
    render(
        <BookingForm availableTimes={availableTimes} />
    );
    const dateInput = screen.getByTestId('date')
    const timeInput = screen.getByTestId('time')
    const guestsInput = screen.getByTestId('guests')

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'res-date');

    expect(timeInput).toHaveAttribute('id', 'res-time');

    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
})

test('Verify form validation', async () => {
    render(
        <BookingForm availableTimes={availableTimes} dispatchResDateChange={() => { }} />
    );
    const dateInput = screen.getByTestId('date')
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } })
    expect(screen.queryAllByText('Please enter a date on or after today').length).toBe(1)
    fireEvent.change(dateInput, { target: { value: new Date() } })
    expect(screen.queryAllByRole('Please enter a date on or after today').length).toBe(0)

    const timeInput = screen.getByTestId('time')
    const timeOptions = within(timeInput).getAllByRole("option");
    fireEvent.change(timeInput, { target: { value: '' } })
    expect(screen.queryAllByText('Please enter a valid time').length).toBe(1)
    fireEvent.change(timeInput, { target: { value: timeOptions[0].value } })
    expect(screen.queryAllByText('Please enter a valid time').length).toBe(0)

    const guestsInput = screen.getByTestId('guests')
    fireEvent.change(guestsInput, { target: { value: '44' } })
    expect(screen.queryAllByText('Please enter a value between 1 and 10').length).toBe(1)
    fireEvent.change(guestsInput, { target: { value: '4' } })
    expect(screen.queryAllByText('Please enter a value between 1 and 10').length).toBe(0)
})