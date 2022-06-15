import React from 'react'
import Prog from'../Imagenes/trabajo.jpg';

const Trabajo = () => {
  return (
    <div className='container row mx-auto' id='Trabajo' >
      <div className='col-6 mt-auto mb-auto'>
        <ul>        
          <h2>Experiencia Laboral</h2>
          <ul>
              <h5>Genexus Consulting</h5>
              <li>Hace unos meses comencé a trabajar como desarrollador jr en Genexus Consulting. Si bien estoy en período de prueba, estoy muy feliz de poder trabajar en el rubro que me gusta.</li>
              <li></li>
          </ul>    
        </ul>  
      </div>
      <div className='col-6'>
        <img className='foto'
            src={Prog}
            alt="Foto ilustrativa programacion"
        />
      </div>
    </div>
  )
}

export default Trabajo