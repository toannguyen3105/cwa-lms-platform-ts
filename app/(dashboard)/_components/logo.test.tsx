import { render } from "@testing-library/react";
import Logo from "./logo";

describe("Logo component", () => {
  it("should render the logo image with correct attributes", () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText("Logo") as HTMLImageElement;

    // Kiểm tra logo được render
    // expect(logoImage).toBeInTheDocument();

    // Kiểm tra chiều cao và chiều rộng của hình ảnh
    expect(logoImage.height).toBe(130);
    expect(logoImage.width).toBe(130);

    // Kiểm tra thuộc tính `src`
    expect(logoImage.src).toContain("/logo.svg");
  });
});
