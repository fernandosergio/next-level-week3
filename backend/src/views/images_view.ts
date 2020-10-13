import Image from '../models/images'

// Formata a vizualização das imagens e a url onde vai ser mostrada
export default {
    // Retorna uma imagem
    render(image: Image){
        return  {
            id: image.id,
            url: `http://localhost:5000/uploads/${image.path}`
          }
    },
    // Retorna todas as imagens
    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}