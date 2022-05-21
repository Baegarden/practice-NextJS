import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = ({ navLink, navInfo }) => {
  const onLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('password');
  };
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          {navInfo === 'Logout' ? (
            <Link href={navLink}>
              <a onClick={onLogout}>{navInfo}</a>
            </Link>
          ) : (
            <Link href={navLink}>
              <a>{navInfo}</a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
