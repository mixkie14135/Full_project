const express = require('express');
const rateLimit = require('express-rate-limit');


const apiLimit = rateLimit({
    windowMs: 1000 * 60 * 3, // 3 minutes
    max: 100,
    messsage : "You have exceeded the 100 requests in 3 minutes limit!",
});

const router = express.Router();
const customerController = require('../controllers/customer');


router.post('/customers', apiLimit, customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id',  customerController.deleteCustomer);
router.get('/customers/:id',  customerController.getCustomer);
router.get('/customers',  customerController.getCustomers);


module.exports = router;