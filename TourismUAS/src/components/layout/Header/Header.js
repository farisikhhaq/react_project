import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PhoneNumber from '../../features/PhoneNumber/PhoneNumber';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={3}>
              <Link to='/'>
                <div className={styles.logo}>
                  <Icon name='compass' />
                  <span className={styles.name}>Tourism indonesia</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to='/wisata' activeClassName='active'>Wisata</NavLink>
                <NavLink to='/kota' activeClassName='active'>Kota</NavLink>
                <NavLink to='/provinsi' activeClassName='active'>Provinsi</NavLink>
                <NavLink to='/kontak' activeClassName='active'>Kontak</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name='phone' /><PhoneNumber/>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
