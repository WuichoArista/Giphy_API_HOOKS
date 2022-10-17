import React, { useState } from 'react'
import Tarjetas from '../../components/Tarjetas/Tarjetas'
import { ConsultarApi } from '../../Hook/Api'
import './Gif.css'


 export const Gif = () => {

 const [ form , setForm ] = useState('')
 const [gif ,setGif] = useState([])


 const cambiar = async(e) => {
   let texto = e.target.value
   setGif(await ConsultarApi(texto , 'gif'))
 }
 

  return (
    <div>
      <div>
        <input onBlur={(e) => cambiar(e)} onChange={ (e) => {setForm(e.target.value)} } type="text" placeholder='Busca un gif' />
        <h1>{form === '' ? 'Gif' : form }</h1>
        <div className="contenedor_tarjetas">
          {
            gif.map( (item , i) => {
              return(
                <Tarjetas key={i} data={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Gif