import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { VideoProvider } from './contexts/VideoContext';


ReactDOM.render(
        <VideoProvider>
            <App />
        </VideoProvider>,
    document.querySelector('#root')
);