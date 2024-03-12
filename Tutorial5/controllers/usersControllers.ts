import { Request, Response } from "express";
import { User } from "../interfaces/User";

const users: User[] = [];

export const getAllUsers = (req: Request, res: Response) => {
  res.json({
    message: "Users retrieved",
    success: true,
    users,
  });
};

export const addUser = (req: Request, res: Response) => {
  const { email, firstName } = req.body;
  if (!email || !firstName) {
    return res.status(400).json({ message: "Missing email or firstName", success: false });
  }
  const newUser: User = {
    id: Date.now().toString(),
    email,
    firstName,
  };
  users.push(newUser);
  res.json({
    message: "User added",
    success: true,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, firstName } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found", success: false });
  }
  user.email = email ?? user.email;
  user.firstName = firstName ?? user.firstName;
  res.json({ message: "User updated", success: true });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found", success: false });
  }
  res.json({ success: true, user });
};
