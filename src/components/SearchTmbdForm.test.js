import React from 'react';
import { shallow } from 'enzyme';
import SearchTmbdForm from './SearchTmbdForm';

describe('SearchTmbdForm', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <SearchTmbdForm
        searchCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
