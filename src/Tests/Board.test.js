import React from 'react';
import Board from '../Components/Board';
import { shallow } from 'enzyme';

describe('Board', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Board />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual( {
      questions: [], currQ: {}, answerBank: []
    })
  });
})