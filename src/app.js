const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const serverLog = require("../middleware/serverLog");
const auth_router = require("./auths/auth.routes");
const category_router = require("./main/categories/categories.router");
const subcat_router = require("./main/categories/subcategories/subcategories.router");
const brands_router = require("./main/brands/brands.router");
const serverMaintain = require("../middleware/serverMaintain");
const multer_router = require("./multer/multer.router");
const products_router = require("./main/products/products.router");
const dashbord_router = require("./main/dashbord/dashbord.router");
const dashbordController = require("./main/dashbord/dashbord.controller");
const carts_router = require("./main/carts/carts.router");
const orders_router = require("./main/orders/orders.router");
const invoice_router = require("./main/invoice/invoive.router");
const transaction_router = require("./main/transaction/transaction.router");
const notification_router = require("./main/notification/notification.router");
const send_email_router = require("./main/sendEmail/sendemail.router");
const app = express();

app.use(cors());
app.options("*", cors());
app.use("/uploads", express.static("uploads"));
app.use("/", multer_router);
app.use(serverMaintain);
app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(dashbordController.incrementCount);
app.use(serverLog);
app.use(auth_router);
app.use(brands_router);
app.use(category_router);
app.use(subcat_router);
app.use(products_router);
app.use(dashbord_router);
app.use(carts_router);
app.use(orders_router);
app.use(invoice_router);
app.use(transaction_router);
app.use(notification_router);
app.use(send_email_router);
module.exports = app;
