import React,{ createContext,useState } from 'react';

export const SelectedVideoContext = createContext();

export const SelectedVideoProvider = ({ children }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <SelectedVideoContext.Provider value={{
            selectedVideo,setSelectedVideo
        }}>
            {children}
        </SelectedVideoContext.Provider>
    );
}