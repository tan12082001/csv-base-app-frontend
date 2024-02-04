import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadFile from '../../assets/upload-icon.png';
import ExcelIcon from '../../assets/excel-icon.png';

const allowedExtensions = ['csv', 'xlsx', 'xls'];

const UploadCSV = () => {
  // store selected file name
  const [selectedFile, setSelectedFile] = useState(null);

  // store file parsed data
  const [fileData, setFileData] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setError('');

    if (e.target.files.length) {
      const file = e.target.files[0];

      const fileExtension = file?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Doesn't support the selected file.");
        setTimeout(() => {
          setError('');
        }, 3000);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-file-div-outer">
      <div className="upload-drag-div">
        <img src={ExcelIcon} alt="Excel-icon" className="upload-excel-icon" />
        {selectedFile ? (
          <>
            <div className="selected-file-div">
              <span className="selected-file-name">{selectedFile.name}</span>
              <button
                type="button"
                id="remove-selected-csv-file"
                onClick={handleRemoveFile}
              >
                Remove
              </button>
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
        )}
        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
      </div>
      <button type="button" className="upload-button">
        <img src={UploadFile} alt="upload-icon" className="upload-file-icon" />
        <span className="button-text">Upload</span>
      </button>
    </div>
  );
};

export default UploadCSV;
