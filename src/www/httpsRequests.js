import axios from "axios";

// get attachment count
export const getAttachmentCount = async (id) =>
  axios.get(`https://task-backend-code.vercel.app/api/attachments/${id}/count`);

// post attachment
export const postAttachment = async (id, formData) =>
  axios.post(
    `https://task-backend-code.vercel.app/api/upload/${id}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
