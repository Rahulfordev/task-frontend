import axios from "axios";

// get attachment count
export const getAttachmentCount = async (id) =>
  axios.get(`http://localhost:5000/api/attachments/${id}/count`);

// post attachment
export const postAttachment = async (id, formData) =>
  axios.post(`http://localhost:5000/api/upload/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
