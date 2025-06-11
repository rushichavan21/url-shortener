import axiosInstance from "../utils/axios.instance";
export const loginReq = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  const user = response?.data?.response?.user;

  if (user?.token) {
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in:", user);

  } else {
    console.warn("Login failed or missing token");
  }

  return response.data;
};


export const signup= async (email, password) => {
  const response = await axiosInstance.post("/auth/register", {
    email: email,
    password: password,
  });
   const user = response?.data?.response?.user;

  if (user?.token) {
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in:", user);
  } else {
    console.warn("Login failed: token or user missing");
  }

  return response.data;
}
