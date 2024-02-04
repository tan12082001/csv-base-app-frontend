import React from 'react';
import UploadFile from '../../assets/upload-icon.png';

const UploadCSV = () => (
  <div className="upload-file-div-outer">
    <div className="upload-drag-div" />
    <button type="button" className="upload-button">
      <img src={UploadFile} alt="upload-icon" className="upload-file-icon" />
      <span className="button-text">Upload</span>
    </button>
  </div>
);

export default UploadCSV;
