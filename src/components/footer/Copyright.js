import React from 'react';
import styles from "./copyright.module.css";
import LanguageIcon from '@material-ui/icons/Language';


const Copyright = () => {
    return (
        <>
            <div className={styles.footer__copyright}>
              <div className="my-container">
                <div className={styles.copyright__wrapper}>
                  <div className={styles.copy__left}>
                    <p>&copy;Fucha International Ltd. 2021</p>
                  </div>

                  <div className={styles.copy__right}>
                    <div className={styles.right__lang}>
                      <a href="#!">
                      <LanguageIcon />
                        English
                      </a>

                      <a href="#!"> $USD </a>
                    </div>
                    <div className={styles.social__icons}>
                      <a href="#!"><i className="fab fa-facebook"></i></a>
                      <a href="#!"><i className="fab fa-instagram"></i></a>
                      <a href="#!"><i className="fab fa-twitter"></i></a>
                      <a href="#!"><i className="fab fa-pinterest"></i></a>
                      <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Copyright
