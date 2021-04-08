import React from 'react';
import styles from './tabItem.module.css';

const TabItem = ({ icon, text }) => {
    return (
        <>
            <div className={styles.tabContents__items}>
                <div className={styles.tabIcon}>
                    {icon}
                </div>
                <p>
                  <a href="#!">{text}</a>
                </p>
            </div>
        </>
    )
}

export default TabItem
