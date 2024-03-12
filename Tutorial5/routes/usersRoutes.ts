import express from "express";
import { addUser, getAllUsers, getUserById, updateUser } from "../controllers/usersControllers";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.get("/user/:id", getUserById);

export default router;
