import axiosInstance from "../utils/axios.instance";
export const loginReq = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  return response;
};


export const signup= async (email, password) => {
  const response = await axiosInstance.post("/auth/register", {
    email: email,
    password: password,
  });
  return response;
}
