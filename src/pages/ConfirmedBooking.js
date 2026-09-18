import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ConfirmedBooking.css'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function ConfirmedBooking() {
    return (
        <h3>
        <FontAwesomeIcon icon={faCircleCheck}/>
        <br/>
        Your reservation has been booked.
        </h3>
    );
  };
  
  export default ConfirmedBooking;