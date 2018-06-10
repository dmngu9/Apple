import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Example from './app';

fdescribe('<Example />', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<Example />);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
