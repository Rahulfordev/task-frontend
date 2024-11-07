import React, { useState, useEffect } from "react";

import AttachmentModal from "./common/AttachmentModal";
import avator_small from "../../public/images/avatar_small.png";
import { FaClipboardList } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

import { SlCalender } from "react-icons/sl";
import { getAttachmentCount, postAttachment } from "../www/httpsRequests";

const Card = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachments, setAttachments] = useState(0);

  useEffect(() => {
    const fetchAttachmentCount = async () => {
      try {
        const response = await getAttachmentCount(id);
        setAttachments(response.data.count);
      } catch (error) {
        console.error("Error fetching attachment count:", error);
      }
    };
    fetchAttachmentCount();
  }, [id]);

  const handleUpload = async (files) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await postAttachment(id, formData);

      setAttachments(response.data.count);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div>
        <div className="card_user">
          <div>
            <img
              src={avator_small}
              className="avator_image"
              alt="avator_large"
            />
            <span>Client Name</span>
          </div>
          <div>
            <img
              src={avator_small}
              className="avator_image"
              alt="avator_large"
            />
            <span>Sadik Istiak</span>
          </div>
        </div>
        <div className="card__main-content">
          <div className="card__main">
            <FaClipboardList />
            <span className="card__description">
              {`Lorem ipsum dolor sit amet consectetur adipisicing elit.`
                .length > 26
                ? `Lorem ipsum dolor sit amet consectetur adipisicing elit.`.substring(
                    0,
                    26
                  ) + "..."
                : `Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            </span>
          </div>
          <div className="card__main">
            <FaClipboardList /> <span className="card__description">1/2</span>
          </div>
        </div>
        <div className="card__footer">
          <div>
            <img
              src={avator_small}
              className="avator_image"
              alt="avator_large"
            />
            <img
              src={avator_small}
              className="avator_image"
              alt="avator_large"
            />
          </div>
          <div className="card__footer-content">
            <button>12+</button>
            <button>
              <FiMessageCircle />
              <span>20</span>
            </button>
            <button onClick={() => setIsModalOpen(true)}>
              <FaLink />
              <span>{attachments}</span>
            </button>
            <button>
              <SlCalender />
              <span>25-12-2023</span>
            </button>
          </div>
        </div>
      </div>

      <AttachmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default Card;
