const express = require("express");
const path = require("path");

exports.getAddNewStudentPage = (request, response, next) => {
    response.render("Home", {});
};
