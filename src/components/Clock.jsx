import React from "react";

class Clock extends React.Component {
  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  render() {
    var { timeInSeconds } = this.props;
    const fTime = this.formatTime(timeInSeconds);
    const timeArr = fTime.split(":");
    var mins = Number(timeArr[0]);
    var secs = Number(timeArr[1]);
    var SS, MM;
    var timer;
    if (timeInSeconds) {
      timer = setInterval(() => {
        if (mins === 0 && secs === 1) {
          clearInterval(timer);
        }

        secs--;
        if (secs < 0) {
          secs = 59;
          mins--;
        }
        secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
        mins < 10 ? (MM = `0${mins}`) : (MM = `${mins}`);
        document.getElementById("clock").innerHTML = `${MM}:${SS}`;
      }, 1000);
    }
    //Keep the classes name. Try to inject your code and do not remove existing code
    return (
      <div className="clock">
        <span className="clock-text" id="clock"></span>
      </div>
    );
  }
}

export default Clock;
