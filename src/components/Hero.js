import { Link } from 'react-router-dom'
import restaurantFood from '../assets/restauranfood.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className='hero-left'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Mediterranean food made with familiar recipes, fresh ingredients and
          a modern touch. Reserve your table and enjoy a relaxed meal with us.
        </p>
        <Link className='btn btn-alt' to='/reservations'>
          Reserve a table
        </Link>
      </div>
      <div className='hero-right'>
        <img src={restaurantFood} alt='Mediterranean dish served at Little Lemon' />
      </div>
    </section>
  );
};

export default Hero;
