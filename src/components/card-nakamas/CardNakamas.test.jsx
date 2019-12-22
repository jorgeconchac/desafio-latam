import React from 'react';
import ReactDOM from 'react-dom';
import CardNakamas from './CardNakamas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardNakamas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
