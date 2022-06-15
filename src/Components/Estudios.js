import React from 'react'
import talleres from '../Imagenes/talleres.jpg';
import ctc from '../Imagenes/ctc.jpg';
const Estudios = () => {
  return (
    <div className='container row mx-auto' id='Estudios'> 
    <div className='col-6 mt-auto mb-auto'>
      <ul>
        <h2>Formación</h2>
        <li>2014 - 2018 — Enseñanza Media Tecnológica — Bachillerato en Informática — 1ro y 2do Talleres Don Bosco, Montevideo, 3ro Escuela Técnica Juan Lacaze</li>
        <li>Bachillerato Biologico, Liceo Juan Lacaze, Depto Colonia, Uruguay</li>
        <br></br>
        <h5>Formacion Extracurricular</h5>
        <li>2022 — Programador Jr GeneXus — GeneXus </li>
        <li>2021 — Actualidad — Analista programador — Instituto ctc</li>
        <li>2020 — Desarrollo web — Jóvenes a Programar — Plan Ceibal</li>
        <li>2020 — SQL for Data Science — University of California, Davis — Coursera</li>
        <br></br>
        <h5>Otras Actividades</h5>
        <li>2012 - 2014 — Acuarela Organización Juvenil - Voluntariado</li>
        <li>2014 — Programa Empresa Juvenil - DESEM - Participante</li>
        <li>2013 - 2014 — Participante Desafío Espacial Latinoamericano</li>
      </ul>
      
      </div>
      <div className='col-6'>
        <img className='foto'
            src={talleres}
            alt="Talleres Don Bosco"
        />

    
        <img className='foto'
            src={ctc}
            alt="CTC"
        />

    </div>  
    </div>
  )
}

export default Estudios;
