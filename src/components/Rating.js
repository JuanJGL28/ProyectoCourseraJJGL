import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarO } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Rating({ rating }) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
    let iconIndex = 1;

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--) {
        output.push(<FontAwesomeIcon icon={faStar} key={iconIndex}/>);
        iconIndex++;
    }


    // If there is a half a star, append it
    if (i === .5) {
        output.push(<FontAwesomeIcon icon={faStarHalfStroke} key={iconIndex}/>);
        iconIndex++;
    }

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--) {
        output.push(<FontAwesomeIcon icon={faStarO} key={iconIndex}/>);
        iconIndex++
    }

    return (
        <div className="rating" style={{ display: 'flex' }}>
            {output}
        </div>
    );
};