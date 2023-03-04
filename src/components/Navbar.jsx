import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Navbar.css';

const links = [
  { path: 'books', text: 'Bookstore CMS', className: 'navLogo' },
  { path: 'books', text: 'BOOKS', className: 'navLink' },
  { path: 'categories', text: 'CATEGORIES', className: 'navLink' },
];

const Navbar = () => (
  <header id="nav">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink className={link.className} to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="navUser"><FaUser /></div>
  </header>
);

export default Navbar;
