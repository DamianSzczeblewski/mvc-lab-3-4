const express = require("express");
const path = require("path");

const router = express.Router();

const getAddNewStudentPage = router.get("/", (request, response, next) => {
    response.render("Home", {});
});

module.exports = getAddNewStudentPage;