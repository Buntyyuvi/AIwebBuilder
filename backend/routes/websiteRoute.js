import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {  changeWebsite, deployWebiste, generateWebsite, getAllWebsites, getBySlug, getWebsiteById } from "../controllers/websiteController.js";



const router = express.Router()

router.post("/generate",isAuthenticated, generateWebsite)
// router.post("/generatedemo", generateDemo)
router.post("/update/:id",isAuthenticated, changeWebsite)
router.get("/getbyid/:id",isAuthenticated, getWebsiteById)
router.get("/getall",isAuthenticated, getAllWebsites)
router.get("/deploy/:id",isAuthenticated, deployWebiste)
router.get("/getbyslug/:slug",isAuthenticated, getBySlug)



export default router