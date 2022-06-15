import React from 'react'
import Yo from'../Imagenes/foto-portfolio.jpeg';
import CV from '../Imagenes/CV Leonardo Fernández.pdf';

const MisDatos = () => {
  return (
    <div className='container row mx-auto' id='MisDatos'>
      <div className='col-6'>
        <img className='foto'
            src={Yo}
            alt="Foto Leo Fernandez"
        />
      </div>
      <div className='col-6 mt-auto mb-auto'> 
        <ul>
          <br></br>
          <h5>Nombre completo</h5>
          <br></br>
          <p>Leonardo Fernández Villanueva</p>
          <h5>Teléfono</h5>
          <p>098 567 716</p>
          <br></br>
          <h5>Dirección</h5>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.6144564006463!2d-57.44004198504869!3d-34.43654708050311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3baea370f3785%3A0xcdad60cfb31b9475!2sRivera%20375%2C%2070500%20Juan%20L.%20Lacaze%2C%20Departamento%20de%20Colonia!5e0!3m2!1ses!2suy!4v1655248708008!5m2!1ses!2suy"
            width="600"
            height="200"
            style={{border:0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <br></br>
          <a className="btn btn-light mx-20"href={CV} target="_blank" rel="noopener noreferrer" download="CV Leonardo Fernández.pdf">Mi CV</a>
        </ul>  
      </div>
    </div>
  )
 
}

export default MisDatos