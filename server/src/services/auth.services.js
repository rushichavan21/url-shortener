import { findUserByEmail, createUser } from '../dao/user.dao.js';
import { signToken } from '../utils/solver.js';
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) {
    const error = new Error('User already exists');
    error.status = 409; // Conflict
    throw error;
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = await createUser({ ...userData, password: hashedPassword });

  const token = await signToken(newUser._id);

  return {
    token,
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    }
  };
};


export const loginUser = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = await signToken(user._id);
    return {user: { id: user._id, email: user.email, username: user.username, token }};
  } catch (error) {
    console.error('Error logging in user:', error);
    throw new Error('Login failed');
  }
};
