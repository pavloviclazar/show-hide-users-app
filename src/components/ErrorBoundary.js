import { Component } from "react";

import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes["message-box"]}>
          <p className={classes.message}>Something went wrong!</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
