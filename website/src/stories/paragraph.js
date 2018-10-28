import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';

import Day from '../components/Day';
import ParagraphModel from '../models/Paragraph';
import Paragraph from '../components/Paragraph';

import '../index.css';

const paragraph = new ParagraphModel({
  id: '123456',
  content: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.',
    'uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at.'
  ]
});

storiesOf('Paragraph details', module)
    .addDecorator(checkA11y)
    .add('without any details', () => <Paragraph paragraph={paragraph} />);
