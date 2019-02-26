import React from 'react';
import Card from '../Components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card />
    );
    
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual( {currQ: {}, ansBank: [], displayQ: false} )
  })
})