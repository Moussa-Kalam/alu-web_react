import React from "react";

export default function WithLogging(WrappedComponent) {
  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithLogging.displayName = `WithLogging(${componentName})`;
  return WithLogging;
}
