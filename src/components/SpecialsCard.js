import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

export default function SpecialsCard({meal}) {
    return (
        <article className="specials-card">
            <img src={meal.image} alt={meal.name} />
            <div className='specials-card-hdr card-title'>
                <h4 className='card-title'>{meal.name}</h4>
                <h4 className='specials-price'>{meal.price}</h4>
            </div>
            <p>{meal.description}</p>
            <Link to={''}>
                Order a delivery
                &nbsp;
                <FontAwesomeIcon icon ={faMotorcycle} />
            </Link>
        </article>
    );
  };
