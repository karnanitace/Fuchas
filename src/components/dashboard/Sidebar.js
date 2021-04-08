import React from 'react';
import serviceImg from '../../images/Rectangle 38.png';
import styles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <>
            <div className={styles.user__infoBoard}>
                <div className={styles.userIcon__left}>S</div>
                <div className={styles.userInfo}>
                  <a href='#!'>View My Favourites</a>
                  <a href='#!'>Invite Friends</a>
                  <a href='#!' className={styles.active}>
                    Start Selling
                  </a>
                </div>
              </div>

              <div className={styles.services__board}>
                <h3>What services are you looking for?</h3>
                <p>Make a request and receive offers from qualified sellers.</p>
                <div className={styles.service__img}>
                  <img src={serviceImg} alt='' />
                </div>
                <button className={styles.request_btn}>Post a Request</button>
              </div>
        </>
    )
}

export default Sidebar
