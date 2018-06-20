import React from 'react';
import { shallow } from 'enzyme';
import RentalList from './Movie';

describe('RentalList', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <RentalList
        pickMovieDetailCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
