import { NavLink } from 'react-router-dom';
import { NavButton } from './';

function SubNavigationBar({ className }) {
  return (
    <ul className={`items-center gap-1 ${className}`}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='Home' />
      </NavLink>
    
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active-page' : null)}
      >
        <NavButton text='About' />
      </NavLink>
    </ul>
  );
}

export default SubNavigationBar;
