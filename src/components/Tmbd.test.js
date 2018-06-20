import React from 'react';
import { shallow } from 'enzyme';
import Tmbd from './Tmbd';

describe('Tmbd', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <Tmbd
        statusCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
