var express = require('express');
var router = express.Router();
var empController = require('../controllers/empController');

/* GET users listing. */
router.get('/', empController.getAllEmps)
router.get('/:id', empController.findEmp)
router.post('/', empController.saveEmp)
router.put('/:id', empController.updateEmp)
router.delete('/:id', empController.deleteEmp)




module.exports = router;
