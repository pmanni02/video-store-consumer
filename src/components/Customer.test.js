import React from 'react';
import { mount } from 'enzyme';
import Customer from './Customer';

describe('Board', () => {
  test('snapshot', () => {
    const wrapper = mount(
      <Customer
        id={0}
        name=''
        address=''
        city=''
        state=''
        postal_code=''
        phone=''
        customerCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
