const express = require('express');
const dishesController = require('../controllers/dishesController');

const router = express.Router();

router.get('/', dishesController.getAllDishes);
router.get('/:id', dishesController.getDishById);
router.post('/', dishesController.createDish);
router.patch('/:id', dishesController.updateDish);
router.delete('/:id', dishesController.deleteDish);

module.exports = router;
