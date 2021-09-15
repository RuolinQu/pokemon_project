import { render, screen } from '@testing-library/react';
import { Item } from 'semantic-ui-react';
import App from './App';



describe("app", () => {
  it("should render snapshot", () => {
    const wrapper = render(<App />);
    const firstRender = wrapper.asFragment();
    expect(firstRender).toMatchSnapshot();
  })
  it("should render header", () => {
    const wrapper = render(<App />);
    const headerElement = wrapper.queryByText("Pokemon Search");
    expect(headerElement).toBeInTheDocument()
  })
})
