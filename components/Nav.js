import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = ({ navLink, navInfo }) => {
  const url = navLink;
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href={`${url}`}>
            <a>{navInfo}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
