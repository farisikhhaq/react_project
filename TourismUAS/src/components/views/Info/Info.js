import React from 'react';
import styles from './Info.scss';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Info extends React.Component {
  render() {
    return (
      <Section>
        <Grid>
          <Row middle="md">
            <Col md={12} lg={6}>
              <PageTitle text='Contact us' />
              <p className={styles.intro}>
                Agen travel ini merupakan salah satu upaya untuk mengenalkan dan mempopulerkan tempat tempat wisata yang ada di tanah air kita indonesia..
              </p>
            </Col>
            <Col md={12} lg={4} lgOffset={2}>
              <List variant='light'>
                <ListItem title='Support Agent: Irfan Thalib' icon='headset' />
                <ListItem title='(+62)88801846073' icon='phone' />
                <ListItem title='alfalib01@gmail.com' icon='envelope' />
                <ListItem title='Jl.Puring No.11, Malang, Jawa Timur 65141' icon='map-marker-alt' />
              </List>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
export default Info;
