import { Router } from "express";
import {
  createTask,
  deleteTask,
  getATask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getATask);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;
