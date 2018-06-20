import React from 'react';
import { shallow } from 'enzyme';
import ShowMovieResults from './ShowMovieResults';

describe('ShowMovieResults', () => {
  test('snapshot', () => {
    const wrapper = shallow(
      <ShowMovieResults
        movies={[]}
        tmbdStatusCallback={()=>{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
