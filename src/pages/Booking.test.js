import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';

test('Initial values of available times', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const timeInput = screen.getByLabelText('Choose time')
    const timeOptions = within(timeInput).getAllByRole("option");
    expect(timeOptions.length).toBeGreaterThan(2);
})

test('Defined date and values of available times', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const dateInput = screen.getByLabelText('Choose date')
    fireEvent.change(dateInput, { target: { value: '2023-11-17' } })
    const timeInput = screen.getByLabelText('Choose time')
    const timeOptions = within(timeInput).getAllByRole("option");
    expect(timeOptions.length).toBeGreaterThan(2);
})

