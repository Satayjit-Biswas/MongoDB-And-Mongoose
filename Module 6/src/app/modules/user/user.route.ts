import express from "express";
import {
    creteUser,
    getRollOneUser,
    getSingleUser,
    getUsers,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.post("/creteUser", creteUser);
router.get("/getRollOne", getRollOneUser);
router.get("/:id", getSingleUser);

export default router;
