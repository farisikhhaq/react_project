import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
  

  getRenderedMessage() {

    const currentHour = new Date().getUTCHours();

    const shifts = {
      amanda: {
        start: 8,
        end: 12,
      },
      tobias: {
        start: 12,
        end: 16,
      },
      helena: {
        start: 16,
        end: 22,
      },
    };

    if(currentHour >= shifts.amanda.start && currentHour < shifts.amanda.end) {
      return 'Irfan, (+62)88801846073)';
    } else if(currentHour >= shifts.tobias.start && currentHour < shifts.tobias.end) {
      return 'Hisyam, (+62)8123454321';
    } else if (currentHour >= shifts.helena.start && currentHour < shifts.helena.end) {
      return 'Faris, (+62)85975462312';
    } else {
      return 'Jam Pelayanan Mulai 09.00 - 22.00 WIB';
    }
  }
  
  render() {
    return (
      <span className={styles.phoneNumber}>{this.getRenderedMessage()}</span>
    );
  }
    
}
    
  
export default PhoneNumber;