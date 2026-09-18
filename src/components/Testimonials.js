import cust01img from '../assets/customer01.jpg'
import cust02img from '../assets/customer02.jpg'
import cust03img from '../assets/customer03.jpg'
import cust04img from '../assets/customer04.jpg'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'

const reviews = [
  {
    name: 'Antony Clifton',
    image: cust01img,
    rating: 4,
    review: 'Good food and a relaxed atmosphere. The Greek salad was fresh and the service was quick.',
  },
  {
    name: 'Brandon Ming',
    image: cust02img,
    rating: 5,
    review: 'The bruschetta was my favorite. Booking a table was simple and everything was ready when we arrived.',
  },
  {
    name: 'Tamika Jackson',
    image: cust03img,
    rating: 4.5,
    review: 'A nice place for dinner with friends. The menu is easy to understand and the portions are generous.',
  },
  {
    name: 'Maria Sanchez',
    image: cust04img,
    rating: 5,
    review: 'Friendly staff and excellent dessert. I would definitely come back for another family dinner.',
  },
]

export default function Testimonials() {
  return (
    <section className='testimonials'>
      <div className='testimonials-header'>
        <h2>What our guests say</h2>
      </div>
      {reviews.map((review) =>
        <TestimonialCard key={review.name} review={review} />)}
    </section>
  );
};
