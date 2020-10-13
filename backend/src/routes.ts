import {Router} from 'express'

// multer pra fazer manipulação dos arquivos
import multer from 'multer'

import OrphanagesController from './controllers/OrphanagesController'
import uploadConfig from './config/upload'

const routes = Router()

const upload = multer(uploadConfig)


// Index, show, create, update, delete são metodos padrão do controller

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images') , OrphanagesController.create)

export default routes