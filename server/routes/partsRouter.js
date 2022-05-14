const Router = require('express')
const router = new Router()
const partsController = require('../controllers/partsController')


router.post('/', partsController.create)
router.get('/', partsController.getAll) 
router.get('/:id', partsController.getOne)




module.exports = router