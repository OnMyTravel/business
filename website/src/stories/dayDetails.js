import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';

import Day from '../components/Day';
import DayModel from '../models/Day';
import Paragraph from '../models/Paragraph';

import '../index.css';

const day = new DayModel({
  "id": "5b5f81ad633153d09309d81b",
  "content": [
    new Paragraph({
      "id": "5b5f82c0633153d09309d81d",
      "content": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.",
        "uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at."
      ]
    }),
    new Paragraph({
      "id": "5b5f82d1633153d09309d81e",
      "content": [
        "Mauris id metus nunc. Morbi vel ligula blandit, gravida magna sit amet, malesuada orci. In hac habitasse platea dictumst. Suspendisse potenti.",
          "enean in dolor sed libero volutpat elementum a non enim. Vivamus et condimentum justo, ac gravida mi."
      ]
    }),
  ]
});

const dayWithFailure = { state: 'FAILED' }

storiesOf('Day details timeline', module)
    .addDecorator(checkA11y)
    .add('without any details', () => <Day id={1} day={day} />)
    .add('with failure', () => <Day id={1} day={dayWithFailure} />);
