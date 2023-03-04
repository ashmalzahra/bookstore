import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Navbar.css'

const links = [
  { path: 'books', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <header id="nav">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink className="NavLink" to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="navUser"><FaUser /></div>
  </header>
);

export default Navbar;
