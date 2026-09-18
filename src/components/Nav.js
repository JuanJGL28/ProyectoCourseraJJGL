import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon _hamburger menu.svg'
import './Nav.css'

export const links = [
  { href: '/', name: 'Home' },
  { href: '', name: 'About' },
  { href: '', name: 'Menu' },
  { href: '/reservations', name: 'Reservations' },
  { href: '', name: 'Order Online' },
  { href: '', name: 'Login' },
];

export default function Nav() {

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <nav>
      {isMenuExpanded ? <div className='overlay'/> : ''}
      <img src={logo} alt="Little Lemon logo" width={140} height={40} />
      <button onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
        <img src={menuIcon} alt="Menu expand icon" />
      </button>
      <ul className={isMenuExpanded ? 'expanded' : ''}>
        {links.map((item, index) =>
          <li key={index}>
            <Link to={item.href} onClick={() => setIsMenuExpanded(false)}>
              {item.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};