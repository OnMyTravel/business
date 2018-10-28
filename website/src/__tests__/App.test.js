import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Button from '../components/Button';
import { MemoryRouter } from 'react-router';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <Button  />
    </MemoryRouter>
  , div);

  ReactDOM.unmountComponentAtNode(div);
});