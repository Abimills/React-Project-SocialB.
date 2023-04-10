import express from "express";

import { getAds, getSingleAd } from "../controllers/ads.js";

const router = express.Router();


router.get("/", getAds);
router.get("/:id", getSingleAd);


export default router;
