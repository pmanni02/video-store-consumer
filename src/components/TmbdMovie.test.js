import React from 'react';
import { shallow } from 'enzyme';
import TmbdMovie from './TmbdMovie';

describe('TmbdMovie', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <TmbdMovie
        id= {0}
        title=''
        releaseDate=''
        poster=''
        overview=''
        statusCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
