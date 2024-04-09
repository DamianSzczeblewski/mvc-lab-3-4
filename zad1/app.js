const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const PORT = 3000;

const router = express.Router();

const app = express();

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: false }));

app.use(
    router.get("/", (request, response, next) => {
        response.render("Home", {});
    })
);

app.use(
    router.get("/success", (request, response, next) => {
        response.render("Success", {});
    })
);

app.use(
    router.get("/students-list", (request, response, next) => {
        response.render("List", {});
    })
);

app.use(
    router.post("/add-student", (request, response, next) => {
        response.render("List", {});
    })
);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});