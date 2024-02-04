import React, { useState } from 'react';
import UploadFile from '../../assets/upload-icon.png';
import ExcelIcon from '../../assets/excel-icon.png';

const UploadCSV = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-file-div-outer">
      <div className="upload-drag-div">
        <img src={ExcelIcon} alt="Excel-icon" className="upload-excel-icon" />
        {
          selectedFile ? (
            <>
              <div className="selected-file-div">
                <span className="selected-file-name">{selectedFile.name}</span>
                <button type="button" id="remove-selected-csv-file" onClick={handleRemoveFile}>Remove</button>
              </div>
            </>
          ) : (
            <>
              <div className="upload-drag-div-browse-text">
                <span>Drop your excel sheet here or </span>
                <label htmlFor="csv-file" className="csv-file-label">
                  browse
                  <input
                    id="csv-file"
                    name="csv-file"
                    type="File"
                    placeholder="browse"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </>
          )
        }
      </div>
      <button type="button" className="upload-button">
        <img src={UploadFile} alt="upload-icon" className="upload-file-icon" />
        <span className="button-text">Upload</span>
      </button>
    </div>
  );
};

export default UploadCSV;
