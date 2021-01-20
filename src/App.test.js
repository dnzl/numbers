import { render, screen } from "@testing-library/react";
import App, { processNumbers } from "./App";

describe("App", () => {
  it("should render inputs", () => {
    render(<App />);
    const firstInput = screen.getByLabelText("First number");
    expect(firstInput).toBeInTheDocument();
    const secondInput = screen.getByLabelText("Second number");
    expect(secondInput).toBeInTheDocument();
  });

  it("should render button", () => {
    render(<App />);
    const button = screen.getByText("Process");
    expect(button).toBeInTheDocument();
  });
});

describe("processNumbers", () => {
  it("should return total numbers divisible by 3", () => {
    const total = processNumbers(1, 9, 3);
    expect(total).toEqual(3);

    const total2 = processNumbers(1, 12, 3);
    expect(total2).toEqual(4);
  });

  // I have doubts if this is the desired behaviour or if in this scenario it should return 0 or an error
  // Since the requirement states that it should run in a *sequence* between input one and two, I infer this as the expected behaviour
  // In normal working conditions I'd clarify this with the PO and UX expert :)
  it("should run the sequence backwards if second number is smaller than first", () => {
    const total = processNumbers(9, 1, 3);
    expect(total).toEqual(3);
  });

  // just to give some flexibility to the function
  it("should return total numbers divisible by 5", () => {
    const total = processNumbers(1, 20, 5);
    expect(total).toEqual(4);
  });
});
