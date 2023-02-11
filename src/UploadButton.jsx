import React from 'react';
import {addVideo} from './UploadInterface.jsx';

export class UploadButton extends React.Component {
    render() {
        return(
        <div className = "UploadButton" id = "UploadButton">
            <input type="file" id="uploader" accept="video/*" />
            <button onClick={addVideo}>Upload</button>
        </div>
        )
    }
}