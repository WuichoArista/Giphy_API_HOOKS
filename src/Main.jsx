import React, {useState} from 'react'

const Main = ( setCategories) => {

    const [valorInput , {setValorInput}] = useState('')

    const Summit = (ev) => {
        if ( ev.target.value.trim().lenght > 2){
            ev.preventDefault()
            setCategories(categorias => [ev.target.value, ... categories])
            setValorInput('')
            console.log('el evento ' , ev)
        }
    }

  return (
    <div>
        
        <form >
         <input onChange={(e) => setValorInput(e.target.value) } value={ValueInput} onSubmit={(ev) => Summit(ev)} type="text" />

        </form>

    </div>
  )
}

export default Main