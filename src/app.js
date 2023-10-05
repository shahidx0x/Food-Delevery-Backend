const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const serverLog = require("../middleware/serverLog");
const auth_router = require("./auths/auth.routes");
const path = require("path");
const category_router = require("./main/categories/categories.router");
const subcat_router = require("./main/categories/subcategories/subcategories.router");
const brands_router = require("./main/brands/brands.router");
const serverMaintain = require("../middleware/serverMaintain");

const app = express();

app.use(serverMaintain);
app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.options("*", cors());
app.use(serverLog);
app.use(auth_router);
app.use(brands_router);
app.use(category_router);
app.use(subcat_router);

module.exports = app;
