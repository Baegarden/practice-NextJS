import Nav from '../components/Nav';
import loginStyles from '../styles/Login.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

const isEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    localStorage.setItem('id', id);
    localStorage.setItem('password', password);
  };

  return (
    <div>
      <Nav navLink="/login" navInfo="Login"></Nav>
      <div className={loginStyles.wrap}>
        <form className={loginStyles.login_form}>
          <h2 className={loginStyles.title}>Create ID</h2>
          <input
            className={loginStyles.input}
            type="text"
            placeholder="Email"
            onChange={e => setId(e.target.value)}
          ></input>
          <input
            className={loginStyles.input}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          ></input>
          {id === '' || isEmail.test(id) !== true ? (
            <button>Login</button>
          ) : (
            <Link href={`/photos`}>
              <a>
                <button onClick={onLogin}>Login</button>
              </a>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
