import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('hola');
  expect(linkElement).toBeInTheDocument();
});


test('the main container should have bg color red', () => {
  const {container} = render(<App/>);
  expect(container.children[0].className).toBe('App');
});
