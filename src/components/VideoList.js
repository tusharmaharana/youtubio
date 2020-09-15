import React from 'react';
import { useVideo } from '../contexts/VideoContext';
import VideoItem from './VideoItem';

export default function VideoList() {
    const {videos} = useVideo();
    return (
        <div className="video-list col-3">
            <ul className="list-group list-group-flush">
                {videos.map((video) => { return <VideoItem video={video} key={video.id.videoId}/>})}
            </ul>
        </div>
    );
}