import React from 'react';
import ReactDOM from 'react-dom';
import TableNakamas from './TableNakamas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableNakamas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
