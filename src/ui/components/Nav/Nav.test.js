import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

import Nav from './Nav';

it('renders correctly Navigation', () => {
    const renderer = new ShallowRenderer()
    const result = renderer.render(<Nav />);
    // const tree = renderer.create(<Nav />).toJSON();
    expect(result).toMatchSnapshot();
});