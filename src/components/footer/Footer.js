import React from 'react';
import styles from './footer.module.css';
import logo from "../../images/logo 2.png";
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <section id={styles.footer}>
        <div className="my-container">
          <Row className="margin-escape">
            <div className={styles.bottom__logo}>
              <a href="#!">
                <img src={logo} alt="Fucas Logo" />
              </a>
            </div>
          </Row>
  
          <div className={styles.footer__links}>
            <div className={`${styles.links__box} ${styles.guide__links}`}>
              <h3 className={styles.links__header}>Fucha guides</h3>
              <ul>
                <li><a href="#!">Graphics & Design</a></li>
                <li><a href="#!">Digital Marketing</a></li>
                <li><a href="#!">Writing & Translation</a></li>
                <li><a href="#!">Video & Animation</a></li>
                <li><a href="#!">Music & Audio</a></li>
                <li><a href="#!">Programming & Tech</a></li>
                <li><a href="#!">Data</a></li>
                <li><a href="#!">Business</a></li>
                <li><a href="#!">Lifestyle</a></li>
                <li><a href="#!">Sitemap</a></li>
              </ul>
            </div>
            <div className={`${styles.links__box} ${styles.guide__links}`}>
              <h3 className={styles.links__header}>Fucha guides</h3>
              <ul>
                <li><a href="#!">Graphics & Design</a></li>
                <li><a href="#!">Digital Marketing</a></li>
                <li><a href="#!">Writing & Translation</a></li>
                <li><a href="#!">Video & Animation</a></li>
                <li><a href="#!">Music & Audio</a></li>
                <li><a href="#!">Programming & Tech</a></li>
                <li><a href="#!">Data</a></li>
                <li><a href="#!">Business</a></li>
                <li><a href="#!">Lifestyle</a></li>
                <li><a href="#!">Sitemap</a></li>
              </ul>
            </div>
            <div className={`${styles.links__box} ${styles.guide__links}`}>
              <h3 className={styles.links__header}>Fucha guides</h3>
              <ul>
                <li><a href="#!">Graphics & Design</a></li>
                <li><a href="#!">Digital Marketing</a></li>
                <li><a href="#!">Writing & Translation</a></li>
                <li><a href="#!">Video & Animation</a></li>
                <li><a href="#!">Music & Audio</a></li>
                <li><a href="#!">Programming & Tech</a></li>
                <li><a href="#!">Data</a></li>
                <li><a href="#!">Business</a></li>
                <li><a href="#!">Lifestyle</a></li>
                <li><a href="#!">Sitemap</a></li>
              </ul>
            </div>
            <div className={`${styles.links__box} ${styles.guide__links}`}>
              <h3 className={styles.links__header}>Fucha guides</h3>
              <ul>
                <li><a href="#!">Graphics & Design</a></li>
                <li><a href="#!">Digital Marketing</a></li>
                <li><a href="#!">Writing & Translation</a></li>
                <li><a href="#!">Video & Animation</a></li>
                <li><a href="#!">Music & Audio</a></li>
                <li><a href="#!">Programming & Tech</a></li>
                <li><a href="#!">Data</a></li>
                <li><a href="#!">Business</a></li>
                <li><a href="#!">Lifestyle</a></li>
                <li><a href="#!">Sitemap</a></li>
              </ul>
            </div>
            <div className={`${styles.links__box} ${styles.guide__links}`}>
              <h3 className={styles.links__header}>Fucha guides</h3>
              <ul>
                <li><a href="#!">Graphics & Design</a></li>
                <li><a href="#!">Digital Marketing</a></li>
                <li><a href="#!">Writing & Translation</a></li>
                <li><a href="#!">Video & Animation</a></li>
                <li><a href="#!">Music & Audio</a></li>
                <li><a href="#!">Programming & Tech</a></li>
                <li><a href="#!">Data</a></li>
                <li><a href="#!">Business</a></li>
                <li><a href="#!">Lifestyle</a></li>
                <li><a href="#!">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Footer
