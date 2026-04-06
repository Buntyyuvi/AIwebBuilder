import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { generateWebsite } from "../controllers/websiteController.js";



const router = express.Router()

router.post("/generate",isAuthenticated, generateWebsite)



export default router