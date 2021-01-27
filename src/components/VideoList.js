import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectWhenClicked }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        thisIsaCallBack={onSelectWhenClicked}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
