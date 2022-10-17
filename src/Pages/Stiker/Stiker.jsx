import React, { useState } from 'react'
import { ConsultarApi } from '../../Hook/Api'
import Tarjetas from '../../components/Tarjetas/Tarjetas'
import './Stiker.css'

const Stiker = () => {

  const [ form , setForm ] = useState('')
  const [stiker ,setStiker] = useState([])

  const cambiar = async(e) => {
    let texto = e.target.value
    setStiker(await ConsultarApi(texto , 'stiker'))
  }

  return (
    <div>
      <div>
        <input onBlur={(e) => cambiar(e)} onChange={ (e) => {setForm(e.target.value)} } type="text" placeholder='Busca un gif' />
        <h1>{form === '' ? 'Stiker' : form }</h1>
        <div className="contenedor_tarjetas">
          {
            stiker.map( (item , i) => {
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

export default Stiker