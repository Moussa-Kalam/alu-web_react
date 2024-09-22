import { render } from "@testing-library/react";
import WithLogging from "./WithLogging";

describe("WithLogging tests", () => {
  it("should log component name to the console", () => {
    const salvedLog = console.log;
    console.log = jest.fn();
    const TestComponent = () => <div>Test</div>;
    const WrappedComponent = WithLogging(TestComponent);
    render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith(
      "Component TestComponent is mounted"
    );
    console.log = salvedLog;
  });
  it("should log component unmount message to the console", () => {
    const salvedLog = console.log;
    console.log = jest.fn();
    const TestComponent = () => <div>Test</div>;
    const WrappedComponent = WithLogging(TestComponent);
    const { unmount } = render(<WrappedComponent />);
    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component TestComponent is going to unmount"
    );
    console.log = salvedLog;
  });
});
