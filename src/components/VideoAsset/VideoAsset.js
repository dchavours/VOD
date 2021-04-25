import React, { Component } from 'react'
import VideoPlayer from "react-video-js-player"
import VidOne from "../../assets/IMG_5587.mp4"


export class VideoAsset extends Component {
    render() {
        const VideoSrc = VidOne;
        const poster = "http://www.cit.nus.edu.sg/graphics/vp-video-editing.jpg";

        return (
            // Insert .mp4 asset here. That will eventually be refactored into a 
            // VideoJS asset.
            <div>
                <VideoPlayer src={VideoSrc} 
                poster={poster} 
                width = "720"
                height="420"
                />
            </div>
        )
    }
}

export default VideoAsset
