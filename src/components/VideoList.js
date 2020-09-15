import VideoItem from './VideoItem';
import { VideoContext } from '../contexts/VideoContext';
import React, { useContext } from 'react';

export default function VideoList() {
    const controlVideos = useContext(VideoContext);
    return (
        <div className="video-list col-3">
            <ul className="list-group list-group-flush">
                {controlVideos.videos.map((video) => { return <VideoItem video={video} key={video.id.videoId}/>})}
            </ul>
        </div>
    );
}