import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { VideoProvider } from './contexts/VideoContext';
import { SelectedVideoProvider } from './contexts/SelectedVideoContext';


ReactDOM.render(
    <SelectedVideoProvider>
        <VideoProvider>
            <App />
        </VideoProvider>
    </SelectedVideoProvider>,
    document.querySelector('#root')
);