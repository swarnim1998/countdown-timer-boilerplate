import React from "react";

class CountdownForm extends React.Component {
  constructor() {
    super();
    this.state = {
      numCheck: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    //This will give you string for seconds. Do not remove refs
    var secondsStr = this.refs.seconds.value;
    if (secondsStr < 1) {
      this.setState({
        numCheck: true,
      });
    } else {
      this.setState({
        numCheck: false,
      });
      this.props.onSetCountdownTime(secondsStr);
      this.refs.seconds.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.numCheck ? (
          <span style={{ color: "red" }}>Invalid Number</span>
        ) : undefined}

        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <input
            type="submit"
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
