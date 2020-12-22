import React, { Component } from "react";

class WrapperYT extends Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }
  componentDidMount() {
    import("./YTPlayer").then((module) =>
      this.setState({ module: module.default })
    );
  }
  render() {
    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    return <div>{Component && <Component />}</div>;
  }
}

export default WrapperYT;
