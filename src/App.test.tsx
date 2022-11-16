import { render, screen } from '@testing-library/react';
import App from './App';
// import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import store from "./redux/state";

test('renders learn react link', () => {
  render(<App store={store}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
