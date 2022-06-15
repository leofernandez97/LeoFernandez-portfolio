import React from 'react'
import Trabajo from './Trabajo'
import Estudios from './Estudios'
import Redes from './Redes'
import MisDatos from './MisDatos'
import Hobbies from './Hobbies'


const Section = () => {
  return (
    <ul>
      <MisDatos />
      <Estudios />
      <Hobbies />
      <Trabajo />
      <Redes />
    </ul>
  )
}

export default Section