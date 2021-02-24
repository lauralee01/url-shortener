import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import UrlShortener from "../components/UrlShortener";
import Url from "../components/Url";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "More than just shorter links" })
    ).toBeInTheDocument();
  });
});

describe("Home", () => {
    it('renders the form correctly', () => {
        const { getByText } = render(<UrlShortener />);
        const button = getByText("Shorten It!");
        expect(button).toHaveAttribute('type', 'submit')
      });
})

describe("<UrlShortener />", () => {
    it("properly shortens valid urls", () => {
      render(<UrlShortener />)
      const shortenLinkButton = screen.getByText("Shorten It!")
      fireEvent.click(shortenLinkButton)
    })
})