import React from 'react';
import ReactDOM from 'react-dom';
import App from '../public/react-usereducer-hook-master/src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
