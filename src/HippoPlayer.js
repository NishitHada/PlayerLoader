import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div>
        <iframe
          className="hippo-embed-frame "
          // width="720"
          // height="405"
          scrolling="no"
          // frameborder=0 marginwidth=0 marginheight=0
          src="https://hippovideon02knq.hippovideo.io/video/embed/WX9u9DyjUbqk8LUXQsgn0FbOSxXoRcY4hLQBLPf5JvY?autoplay=true"
          allowFullScreen
        ></iframe>
        <script>window.hippoEmbedSeo = "";</script>
        <script
          src="https://hippo-embed-scripts.s3.amazonaws.com/video-delivery-embed.js"
          async
        ></script>
      </div>
    );
  }
}

export default Player;
