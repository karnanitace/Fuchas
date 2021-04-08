import React from 'react';
import styles from './header2.module.css';
import { Dropdown } from 'react-bootstrap';


const Header2 = () => {
    return (
        <>
            <header className={styles.header2}>
                <div className={styles.header__wrapper}>
                  <nav className={styles.header2__nav}>
                    <ul className={styles.header2__menu}>
                      <li className={styles.active}><a href="#!">Dashboard</a></li>
                      <li className={styles.has__submenu}>
                        <Dropdown>
                            <Dropdown.Toggle className={styles.submenu__link}>
                              Contacts
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Conatct1</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Contact2</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Contact3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li><a href="#!">Inbox</a></li>
                      <li><a href="#!">Settings</a></li>
                    </ul>
                  </nav>

                  <button className={styles.sellBtn}>Start Selling</button>
                </div>
            </header>   
        </>
    )
}

export default Header2
