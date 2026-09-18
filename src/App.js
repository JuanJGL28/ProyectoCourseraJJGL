import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Booking from './pages/Booking'
import ConfirmedBooking from './pages/ConfirmedBooking'
import Main from './components/Main'
import './App.css';

// Proyecto final de Coursera - Juan Gomez (JJGL)
function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<Booking />} />
          <Route path='/reservation-confirmation' element={<ConfirmedBooking />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
