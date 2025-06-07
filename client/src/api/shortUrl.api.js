import axiosInstance from "../utils/axios.instance";
export const getShortUrl = async (url) => {
  const response=await axiosInstance.post("/generate-id", {
    url: url,
  });
    return response.data;
}