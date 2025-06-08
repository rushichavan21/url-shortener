import User from '../models/user.model.js';
export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({email});
    return user;
  } catch (error) { 
    console.error('Error finding user by email:', error);
    throw new Error('Database error');
  }
}    

const findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error('Error finding user by ID:', error);
    throw new Error('Database error');
  }
}

export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Database error');
  }
}