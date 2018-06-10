import * as React from 'react';

import { Root } from './styles';

interface State {
    name: string;
}

interface Props {
    onClick?: () => void;
}

export default class Example extends React.Component<Props, State> {
    state: State = {
        name: 'left'
    };

    onClick = () => {
        this.props.onClick && this.props.onClick();
        this.setState({ name: 'right' });
    }

    render() {
        return <Root onClick={this.onClick}>This is {this.state.name}</Root>;
    }
}
