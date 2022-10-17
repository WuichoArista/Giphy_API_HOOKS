import axios from 'axios'

export const ConsultarApi = async (dato, tipo) => {
    

   if(tipo === 'gif'){
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Io2UowxNnL512ex8KwFp2elE5VhgZuBY&q=${dato}&limit=20&offset=0&rating=g&lang=es`
        const respuesta = await axios.get(url)
        const data = respuesta.data.data
    
        const gifs = data.map( (img) => {
            return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
            }
        })
        return gifs
   } else if ( tipo === 'stiker') {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=Io2UowxNnL512ex8KwFp2elE5VhgZuBY&q=${dato}&limit=20&offset=0&rating=g&lang=es`
    const respuesta = await axios.get(url)
    const data = respuesta.data.data

    const stiker = data.map( (img) => {
        return {
        id: img.id,
        title: img.title,
        url: img.images.original.url
        }
    })
    return stiker
   }

}