import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Location from '../components/Location'

storiesOf('Location', module)
  .add('with full informations', () => <Location name="Central Park" address="5th Avenue, New York City, NY 10022" />)
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ));
