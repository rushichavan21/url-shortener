import { loginUser, registerUser } from "../services/auth.services.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const response= await loginUser(email, password);

    res.cookie("token", response.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });
    res.status(200).json({response});
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(401).json({ error: error.message || "Login failed" });
  }
};



export const register = async (req, res) => {
  const {  email, password } = req.body;
   const username="hell"
  if (!username || !email || !password) {
    return res.status(400).json({
      error: "Username, email, and password are required"
    });
  }

  try {
    const { token, user } = await registerUser({ username, email, password });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(201).json({ user,token });
  } catch (error) {
    console.error("Registration error:", error.message);
    const status = error.status || 500;
    res.status(status).json({ error: error.message || "Registration failed" });
  }
};
