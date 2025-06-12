import axiosInstance from "../utils/axios.instance";
export const getShortUrl = async (url) => {
  const response=await axiosInstance.post("/api/generate-id", {
    url: url,
  });
    return response.data.shortUrl;
}

export const getShortUrlWithUser = async (url, token) => {
  const response = await axiosInstance.post(
    "/create/user",
    { url },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Response from getShortUrlWithUser:", response.data.shortUrl);
  return response.data.shortUrl
};

export const getShortUrlCustom = async (url, customId, token) => {
  const response = await axiosInstance.post(
    "/create/user/custom",
    { url, customId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("Response from getShortUrlCustom:", response.data);
  return response.data.shortUrl;
}