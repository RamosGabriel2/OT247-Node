const express = require('express');
const router = express.Router();
const { getCategoriesNames } = require('../controllers/categories');
const { isAdmin } = require('../middlewares/isAdmin')
const { verify } = require('../middlewares/verifyToken')
const categoryCtrl = require('../controllers/categories');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category')
const { categoryExists } = require('../middlewares/categoryExists')

router
  .get('/', isAdmin, getCategoriesNames)
  .post('/', verify, isAdmin, schemaValidator(category), categoryCtrl.createCategory)
  .delete('/:id', isAdmin, categoryExists, categoryCtrl.deleteCategoryById)

module.exports = router;
