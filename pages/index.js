import Nav from '../components/Nav';
import React, { useState, useEffect } from 'react';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  const [url, setUrl] = useState('/photos');
  useEffect(() => {
    const userId = localStorage.getItem('id');
    const userPassword = localStorage.getItem('password');
    if (userId === null && userPassword === null) setUrl('/login');
  }, []);

  return (
    <div>
      <Nav navLink={url} navInfo="Login"></Nav>
      <h1 className={homeStyles.welcome}>
        Welcome to Album Application with CRUD
      </h1>
    </div>
  );
}
