const express = require("express");
const router = express.Router();
const homeControlller = require("../controllers/homeController");

router.get("/home", homeControlller.index); 
router.get("/post-page", homeControlller.post); 


module.exports = router;