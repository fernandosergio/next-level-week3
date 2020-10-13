import {Request, Response} from 'express'

// chama o negocio que vai manipula o banco de dados
import { getRepository } from 'typeorm' 

 // chama a classe que vai dizer o que tem no banco de dados
import Orphanage from '../models/orphanage'

import OrphanageView from '../views/orphanages_view'

// Faz a validação dos dados inseridos
import * as Yup from 'yup'

export default {

    // Envia todos os dados
    async index(req:Request, res:Response){
        // Pega os dados de como manipular a tabela
        const orphanagesRepository = getRepository(Orphanage)

        // Procura os dados
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })
        // Retorna os dados
        return res.json(OrphanageView.renderMany(orphanages))
    },

    // Envia um dado
    async show(req:Request, res:Response){
        // Pega o id do dado desejado
        const {id} = req.params

        const orphanagesRepository = getRepository(Orphanage)

        const orphanage = await orphanagesRepository.findOneOrFail(id,{
            relations:['images']
        })

        return res.json(OrphanageView.render(orphanage))
    },

    // cria um dado
    async create(req: Request,res: Response){


        // descontrução do req.body
        const {name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body

        // Adiciona os metodos ao orphanage de criar, achar, etc
        const orphanagesRepository = getRepository(Orphanage)

        const requestImages = req.files as Express.Multer.File[]

        const images = requestImages.map(image => {
            return {path: image.filename}
        })

        // Formatação dos dados
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        }

        // Formatacão da validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        })

        // Validação dos dados
        await schema.validate(data,{
            abortEarly: false
        })

        // cria o orfanato
        const orphanage = orphanagesRepository.create(data)

        // salva o orfanato
        await orphanagesRepository.save(orphanage)

        // codigo 201 significado que algo foi criado
        return res.status(201).json(orphanage)
    }
}