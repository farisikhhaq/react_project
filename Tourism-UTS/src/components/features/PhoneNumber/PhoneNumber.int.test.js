import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';


const select = {
  phoneNumber: '.phoneNumber',
};
  
  
const mockProps = {
  phoneNumber: '(+62)88801846073)',
};


const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('Component PhoneNumber with mocked Date', () => {

  const checkConcatDetailsAtTime = (time, expectedContactDetails) => {
    it(`should show correct contact details at ${time}`, () => {
      global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
      const component = shallow(<PhoneNumber {...mockProps} />);
      const renderedContactDetails = component.find(select.phoneNumber).text();
      expect(renderedContactDetails).toEqual(expectedContactDetails);
  
      global.Date = trueDate;
    });
  };
  
  describe('Component PhoneNumber with mocked Date', () => {
    checkConcatDetailsAtTime('11:57:58', 'Irfan, (+62)88801846073)');
    checkConcatDetailsAtTime('13:59:59', 'Hisyam, (+62)8123454321');
    checkConcatDetailsAtTime('17:00:00', 'Faris, (+62)85975462312');
    checkConcatDetailsAtTime('23:00:00', 'The office opens at 8:00 UTC');
  });
});




