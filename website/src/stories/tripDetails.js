import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';

import TripTimeline from '../components/TripTimeline';

import '../index.css';

const trip = {
  description: 'The city that never sleeps. The Big Apple. Concrete jungle. New York City.',
  steps: [
    { id: '', content: 'The backdrop of countless classics, New York City, has a unique aura to it. A massive city of 9 million, New York City is impossible to ‘see’ in one visit. However, there are ways to make the most of the limited time you have. Here is a weekend guide to New York City:' },
    { id: '', content: "America's first major landscaped public park, a walk around the Central Park is the perfect way to kick start your 3 days in New York. Spread over 843 acres, Central Park offers hundreds of special attractions for explorers; green meadows, sprawling lakes, gardens, unique bridges and classical architecture." },
    { id: '', content: "Expect tan-hungry locals to take over the area on weekends, alongside Frisbee-throwing bros and guitar sing-alongs. Do not forget to attempt a handstand!" },
  ]
}

storiesOf('Trip timeline', module)
    .addDecorator(checkA11y)
    .add('without any details', () => <TripTimeline trip={trip} />);
