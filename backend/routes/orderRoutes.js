import express from "express";
import {
  addOrderItems,
  getOrderById,
  updatedOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middelware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updatedOrderToPaid);

export default router;
