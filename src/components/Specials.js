import { Link } from 'react-router-dom'
import SpecialsCard from './SpecialsCard'
import './Specials.css'

import bruschettaImage from '../assets/bruschetta.jpg';
import greekSaladImage from '../assets/greek-salad.jpg';
import lemonDessertImage from '../assets/lemon-dessert.jpg';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous Greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

export default function Specials() {
  return (
    <section className='specials'>
      <div className='specials-header'>
        <h2>This week's specials!</h2>
        <Link className='btn' to=''>
          Online Menu
        </Link>
      </div>
      {meals.map((meal) =>
        <SpecialsCard meal={meal} key={meal.name} />)}
    </section>
  );
};