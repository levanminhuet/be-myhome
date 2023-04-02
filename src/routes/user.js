import express from "express";
import checkToken from "../middleware/checkToken";
import * as userController from "../controllers/user";

const router = express.Router();

router.use(checkToken);
router.get("/get-current", userController.getCurrent);

export default router;
