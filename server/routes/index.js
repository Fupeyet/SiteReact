const Router = require('express')
const router = new Router()
const partsRouter = require('./partsRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/parts', partsRouter)



module.exports = router