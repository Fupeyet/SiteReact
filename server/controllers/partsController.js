const uuid = require('uuid')
const path = require('path');
const { Parts, DeviceInfo, PartsInfo } = require('../models/models');
const ApiError = require('../error/ApiError')

class PartsController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() = ".jpg"
            img.mv(path.resolve(--__dirname, '..', 'static', fileName))

            const device = await Parts.create({name, price, brandId, typeId, img: fileName})

            if(Info){
                info = JSON.parse(info)
                info.forEach(i => 
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            partsId: parts.id
                        })
                    )
            }

            return res,json(parts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let parts;
        if (!brandId && !typeId) {
            parts = await Parts.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            parts = await Parts.findAndCountAll({where:{brandId}})
        }
        if (!brandId && typeId) {
            parts = await Parts.findAndCountAll({where:{typeId}})
        }
        if (brandId && typeId) {
            parts = await Parts.findAndCountAll({where:{brandId, typeId}})
        }
        return res.json(parts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const parts = await Parts.findOne(
            {
                where: {id},
                include: [{model: PartsInfo, as: 'info'}]
            },
        )
        return res.json(parts)
    }

}


module.exports = new PartsController()