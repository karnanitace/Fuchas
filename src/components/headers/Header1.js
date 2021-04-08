import React from 'react';
import styles from './header.module.css';
import logo from '../../images/logo 1.png';
import SearchIcon from '@material-ui/icons/Search';

const Header1 = () => {
  return (
    <>
      <header className={styles.header}>
        <div className='logo'>
          <a href='#!'>
            <img src={logo} alt='Fuchas Logo' />
          </a>
        </div>
        <div className={styles.search__container}>
          <div className={styles.search__box}>
            <form className={styles.header__searchForm}>
              <button className={styles.search__icon}>
                <SearchIcon />
              </button>
              <input
                type='text'
                placeholder='Try Building Your Future Together'
              />
            </form>
          </div>
        </div>
        <nav className={styles.header1__nav}>
          <ul className={styles.header1__menu}>
            <li className={styles.active}>
              <a href='#!'>fuchas Pro</a>
            </li>
            <li>
              <a href='#!'>Explore</a>
            </li>
            <li>
              <a href='#!'>Messages</a>
            </li>
            <li>
              <a href='#!'>Lists</a>
            </li>
            <li>
              <a href='#!'>Order</a>
            </li>
            <li className={styles.username__icon}>
              <a href='#!'>S</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header1;
