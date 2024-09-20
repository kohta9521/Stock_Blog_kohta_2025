import React from "react";
import { render, screen } from "@testing-library/react";
import Logo, { LogoProps } from "../Logo";
import "@testing-library/jest-dom/extend-expect";

// テスト用のプロパティ
const defaultProps: LogoProps = {
  id: "logo-test-id",
  size: "medium",
};

describe("Logo component", () => {
  it("renders Logo component with correct alt text", () => {
    render(<Logo {...defaultProps} />);

    const logoImage = screen.getByAltText("ロゴ画像");
    expect(logoImage).toBeInTheDocument();
  });

  it("applies the correct size class for medium size", () => {
    render(<Logo {...defaultProps} />);

    const logoImage = screen.getByAltText("ロゴ画像");
    expect(logoImage).toHaveClass("medium");
  });

  it("applies the correct size class for large size", () => {
    render(<Logo {...defaultProps} size="large" />);

    const logoImage = screen.getByAltText("ロゴ画像");
    expect(logoImage).toHaveClass("large");
  });
});
