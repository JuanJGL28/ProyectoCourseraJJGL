import photoA from '../assets/Mario and Adrian A.jpg';
import photoB from '../assets/Mario and Adrian B.jpg';
import './About.css';

export default function About() {
  return (
    <section className='about' id='about'>
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant in Chicago.
          Mario and Adrian grew up around traditional family recipes and later
          decided to bring those flavors into a relaxed neighborhood restaurant.
          Our menu keeps the recipes simple, fresh and familiar, while adding a
          few modern touches to the presentation.
        </p>
        <p>
          We want guests to feel comfortable whether they are stopping by for a
          quick meal, meeting friends or celebrating something special. That is
          why the restaurant focuses on friendly service, seasonal ingredients
          and dishes that are easy to share.
        </p>
      </div>
      <div className="about-right">
        <img src={photoA} alt="Mario and Adrian preparing food" />
        <img src={photoB} alt="Little Lemon chefs Mario and Adrian" />
      </div>
    </section>
  );
};
