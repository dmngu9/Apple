import * as React from 'react';

import { Root } from './styles';

interface State {
    name: string;
}
export default class Example extends React.Component<{}, State> {
    state: State = {
        name: 'left'
    };

    onClick = () => {
        this.setState({ name: 'right' });
    };

    render() {
        return <Root onClick={this.onClick}>This is {this.state.name}</Root>;
    }
}
