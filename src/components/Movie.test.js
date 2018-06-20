import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('CustomerList', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <Movie
        id={0}
        title=''
        overview=''
        release=''
        image_url=''
        movieCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
