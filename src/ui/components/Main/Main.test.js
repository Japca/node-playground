import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main';

it('renders correctly Main', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});