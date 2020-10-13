import Orphanage from '../models/orphanage'
import imagesView from './images_view'

// Faz a formatação de como os dados da tabela orphanages vão ser vistos
export default {
    // Retorna um orfanato
    render(orphanage:Orphanage){
        return  {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
          }
    },
    // Retorna todos os orfanatos
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}

/*
Pega a formatação da tabela orphanage e diz qual é qual e retorna
*/