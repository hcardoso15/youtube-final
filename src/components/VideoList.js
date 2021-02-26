import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videoList, videoDetails, authorDetailsPage }) => {
    return (
        videoList.map(function (video, index) {
            return (
                <VideoItem
                    snippet={video.snippet}
                    index={index}
                    videoDetails={videoDetails}touch
                    authorDetailsPage={authorDetailsPage}
                />
            );
        })

    );
}

export default VideoList