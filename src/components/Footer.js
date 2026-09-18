import { Link } from 'react-router-dom'
import { links } from './Nav'
import logo from '../assets/logo.svg';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const contacts = [
  { icon: faLocationDot, text: '123 Central St.' },
  { icon: faLocationDot, text: 'Chicago, IL', hide: true },
  { icon: faPhone, text: '(312) 555-1212' },
  { icon: faEnvelope, text: 'info@littlelemon.com' },

]

const socials = [
  { icon: faFacebook, name: 'Facebook', href: 'https://facebook.com' },
  { icon: faInstagram, name: 'Instagram', href: 'https://instagram.com' },
  { icon: faTwitter, name: 'Twitter', href: 'https://twitter.com' },

]

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="Little Lemon logo" width={140} height={40} />
      </div>
      <div>
        <h5>Site Navigation</h5>
        <ul>
          {links.map((item, index) =>
            <li key={index}>
              <Link to={item.href}>
                {item.name}
              </Link>
            </li>
          )}
        </ul>

      </div>
      <div className='link-list'>
        <h5>Contact</h5>
        <ul>
        {contacts.map((item, index) =>
          <li key={index}>
            <FontAwesomeIcon icon={item.icon} style={ item.hide ? { visibility: 'hidden' } : '' } />
            &nbsp; &nbsp;
            <blockquote>{item.text}</blockquote>
          </li>
        )}
        </ul>
      </div>
      <div className='link-list'>
        <h5>Social Media</h5>
        <ul>
        {socials.map((item, index) =>
        <li key={index}>
          <a href={item.href}>
            <FontAwesomeIcon icon={item.icon} />
            &nbsp; &nbsp;
            <blockquote>{item.name}</blockquote>
          </a>
        </li>
        )}

        </ul>
      </div>
    </footer>
  );
};