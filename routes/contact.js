const express = require("express");
const { getContact, postContact } = require("../controller/contact");

const router = express.Router();

//GET MESSAGES
router.get("/contact", getContact);

//POST MESSAGES
router.post("/createContact", postContact);

module.exports = router;
