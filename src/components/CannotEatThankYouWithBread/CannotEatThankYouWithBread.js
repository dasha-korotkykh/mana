import React, { Component } from "react";
import cannotEatThankYouWithBreadAudio from "./assets/audio/cannot-eat-thank-you-with-bread.m4a";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/pro-regular-svg-icons";
import "./CannotEatThankYouWithBread.css";

class CannotEatThankYouWithBread extends Component {
  play = () => this.audio && this.audio.play();
  pause = () => {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
  render() {
    const { source, children } = this.props;
    return (
      <span className="cant-eat-thank-you-with-bread">
        <span onMouseEnter={this.play} onMouseLeave={this.pause}>
          {
            children || (
              <>
                "<FontAwesomeIcon icon={faVolumeUp} /> Cпасибо на хлеб не намажешь"
              </>
            )
          }
        </span>
        <audio ref={audio => this.audio = audio} preload="auto">
          <source src={source || cannotEatThankYouWithBreadAudio} type="audio/mpeg" />
        </audio>
      </span>
    );
  }
}

export default CannotEatThankYouWithBread;