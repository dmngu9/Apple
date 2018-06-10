import * as React from 'react';
import { create } from 'react-test-renderer';
import Example from './app';

fdescribe('<Example />', () => {
    test('should render correctly', () => {
        const component = create(<Example />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should update component when on click', () => {
        const component = create(<Example />);
        let tree = component.toJSON();

        tree && tree.props.onClick();
        tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
