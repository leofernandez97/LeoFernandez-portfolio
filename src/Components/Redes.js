import React from 'react'
import fb from '../Imagenes/logo fb.png'
import ig from '../Imagenes/logo ig.png'

const Redes = () => {
  return (
    <div>
      <div>
      <a href='https://www.instagram.com/leofernandezz97/' target='_blank'>
        <img className='logos'
            src={ig}
            alt="Logo Instagram "
        />
      </a>
      <a href='https://www.facebook.com/leofernandez97/' target='_blank'>
        <img className='logos'
            src={fb}
            alt="Logo Facebook "
        />
        </a>  
      </div>
    </div>
  )
}
export default Redes