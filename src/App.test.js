import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./app/store";

test('renders main page', () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>
  );
  const titleElement = screen.getByRole('heading');
  expect(titleElement).toHaveTextContent(/products/i);
});
