import React from 'react';
import PlayerScore from '../Components/PlayerScore';
import { shallow } from 'enzyme';

describe('PlayerScore', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PlayerScore />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})