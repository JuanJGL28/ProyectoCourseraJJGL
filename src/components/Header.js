import { useEffect, useState } from 'react';
import Nav from './Nav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll = () => setIsScrolled(window.scrollY > 0 ? true : false )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'scrolled' : ''} >
      <Nav />
    </header>
  );
};