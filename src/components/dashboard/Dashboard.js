import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './dashboard.module.css';
import DashboardTab from './DashboardTab';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <>
      <section id={styles.main_content}>
        <div className='my-container'>
          <Row className='margin-escape'>
            <Col md='3' lg='3' className={styles.side__board}>
              <Sidebar />
            </Col>
            <Col md='9' lg='9' className={styles.main__board}>
              <div className={styles.main__wrapper}>
                <DashboardTab />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
