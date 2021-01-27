import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, thisIsaCallBack }) => {
  return (
    <div onClick={() => thisIsaCallBack(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.id.videoId}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
