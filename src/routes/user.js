import express from "express";
import * as userController from "../controllers/user";
import { verifyToken, isAdmin } from "../middleware/verifyToken";

const router = express.Router();

router.get("/get-current", verifyToken, userController.getCurrent);
router.get('/roles', verifyToken, isAdmin, userController.getRoles)
export default router;
