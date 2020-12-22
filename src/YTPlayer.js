import React, { Component } from "react";
import styled from "styled-components";

class Player extends Component {
  render() {
    return (
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ?autoplay=1&mute=1"
        style={{ height: `100%`, width: `100%` }}
        frameBorder="0"
        allow="autoplay; encrypted-media; muted"
        allowFullScreen
        title="video1"
      />
    );
  }
}

export default Player;
