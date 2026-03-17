import React from 'react';
import NavLink from './NavLink';
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

const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-10'>
                {
                    navLinks.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            
            {/* <ul className='flex '>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Coutact</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;