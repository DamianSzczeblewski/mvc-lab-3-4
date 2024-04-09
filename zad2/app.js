const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const errorRouter = require("./controllers/error");
const studentRouter = require("./controllers/students");

const PORT = 3000;

const router = express.Router();

const app = express();

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: false }));

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

app.use(errorRouter.getNotFound);
app.use(studentRouter.getAddNewStudentPage);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
