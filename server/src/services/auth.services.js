import { findUserByEmail, createUser } from '../dao/user.dao.js';
import { signToken } from '../utils/solver.js';
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
  try {
    const existingUser = await findUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await createUser({ ...userData, password: hashedPassword });

    const token = signToken(newUser._id);
    return token;
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Registration failed');
  }
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

    const token = signToken(user._id);
    return token;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw new Error('Login failed');
  }
};
