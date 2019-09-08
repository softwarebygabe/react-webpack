import * as React from "react";
import "./Counter.css";

interface CounterProps {
  title: string;
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter-title">{this.props.title}</div>
        <div className="counter-value">{this.state.count}</div>
        <button onClick={this.incrementCount}>Click Me!</button>
      </div>
    );
  }
}

export default Counter;
