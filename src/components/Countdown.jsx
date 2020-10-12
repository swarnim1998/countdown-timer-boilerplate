import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      cTime: "",
    };
  }

  onSetCountdownTime = (time) => {
    this.setState({
      cTime: time,
    });
  };

  render() {
    return (
      <div>
        <Clock timeInSeconds={this.state.cTime} />
        <CountdownForm onSetCountdownTime={this.onSetCountdownTime} />
      </div>
    );
  }
}

export default Countdown;
