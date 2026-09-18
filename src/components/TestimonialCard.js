import Rating from "./Rating";

export default function TestimonialCard({review}) {
    return (
        <article className="testimonial-card">
            <Rating rating={review.rating}/>
            <div className='testimonial-row'>
                <img src={review.image} alt={review.name} />
                <p className='testimonial-name'>{review.name}</p>
            </div>
            <p>{review.review}</p>
        </article>
    );
  };
