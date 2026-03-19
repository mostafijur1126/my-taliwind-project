import React, { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';
const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];


const links = navLinks.map((route, index )=> <li key={index} className='px-4 lg:mr-10 hover:bg-amber-600'><a href={route.path}>{route.name}</a></li>);
const NavBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <nav className='flex justify-between mx-10'>

      <span className='flex' onClick={() => setOpen(!open)} >
        {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
        
        <ul className={`md:hidden text-black absolute duration-1000 ${open? 'top-8' : '-top-40'} bg-amber-400`}>
          {links}
        </ul>
        <h2>My Navbar</h2>
      </span>
      <ul className='flex gap-10 md:flex hidden'>
        {
          links
        }
      </ul>
      <button>Singin</button>
    </nav>
  );
};

export default NavBar;