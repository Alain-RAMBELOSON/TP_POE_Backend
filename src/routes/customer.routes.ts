const customerRouter = require("express").Router();
const customerCreateController = require("../controllers/customer/customer.create.controller");
const customerReadController = require("../controllers/customer/customer.read.controller");
const customersReadController = require("../controllers/customer/customers.read.controller");
const customerUpdateController = require("../controllers/customer/customer.update.controller");
const customerDeleteController = require("../controllers/customer/customer.delete.controller");

customerRouter.post("/", customerCreateController.createCustomer);
customerRouter.get("/:id", customerReadController.getCustomerByID);
customerRouter.get("/", customersReadController.getCustomers);
customerRouter.put("/:id", customerUpdateController.updateCustomerByID);
customerRouter.delete("/:id", customerDeleteController.deleteCustomerByID);

module.exports = customerRouter;
