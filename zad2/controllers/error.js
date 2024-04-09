const express = require("express");
const path = require("path");

exports.getNotFound = (request, response, next) => {
    response.render("NotFound", {});
};
