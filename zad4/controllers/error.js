const express = require("express");
const path = require("path");

const router = express.Router();

const getNotFound = router.get("/getnotfound", (request, response, next) => {
    response.render("NotFound", {});
});

module.exports = getNotFound;