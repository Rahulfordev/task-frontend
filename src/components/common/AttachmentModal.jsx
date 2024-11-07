import React, { useState } from "react";
import "./AttachmentModal.css";
import { IoClose } from "react-icons/io5";

const AttachmentModal = ({ isOpen, onClose, onUpload }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    onUpload(files);
    setFiles([]);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <div>
            <h2>Upload Attachments</h2>
            <IoClose className="close_icon" onClick={onClose} />
          </div>
          <input type="file" multiple onChange={handleFileChange} />
          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
          <button className="upload_button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    )
  );
};

export default AttachmentModal;
