import React from 'react';
import styles from './Home.scss';
import Section from '../../layout/Section/Section';
import Hero from '../../layout/Hero/Hero';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home = () => (
  <Section variant='has-hero'>
    <Hero titleText='Segera Kunjungi' imageSrc='https://wallpaperaccess.com/full/441134.jpg' />
    <Grid>
      <Row middle="md">
        <Col md={6}>
          <h1 className={styles.title}>Wonderful Indonesia.</h1>
          <p className={styles.intro}>Temukan berbagai macam destinasi wisata yang tidak pernah anda lihat sebelumnya #WonderfulIndonesia.</p>
        </Col>
        <Col xs={12} md={5} mdOffset={1} xl={3} xlOffset={2}>
          <List variant='solid'>
            <ListItem title='Hand-picked destinations' icon='map-marker-alt' />
            <ListItem title='Best facilities' icon='hotel' />
            <ListItem title='All-inclusive trips' icon='glass-martini-alt' />
            <ListItem title='24/7 Support' icon='headset' />
          </List>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Home;
