const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const {validateBody, isValidId, isEmptyBody} = require('../../middlewares');
const schemas = require('../../schemas/contact');


router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add)

router.put('/:contactId', isValidId, isEmptyBody, validateBody(schemas.addSchema), ctrl.updateById);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.favorite), ctrl.updateStatusById);

router.delete('/:contactId', isValidId, ctrl.deleteById);

module.exports = router
