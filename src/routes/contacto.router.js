const express = require("express");
const router = express.Router();

const controller = require("../controllers/contacto.contoller");

router.get("/", controller.index);
router.post('/', controller.submit);

module.exports = router;