import React from 'react';
import { mount } from 'enzyme';
import CustomerList from './CustomerList';

describe('CustomerList', () => {
  test('snapshot', () => {
    const wrapper = mount(
      <CustomerList
        pickCustomerDetailCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
