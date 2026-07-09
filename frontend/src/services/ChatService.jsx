import api from "../api/api";

export const sendMessage = async (message) => {
  const response = await api.post("/chat", {
    message,
  });

  return response.data;
};
