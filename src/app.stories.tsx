import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Example from './app';

storiesOf('Example', module).add('basic', () => <Example onClick={action('click')} />);
