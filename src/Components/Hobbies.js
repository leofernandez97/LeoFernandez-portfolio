import Carousel from 'react-bootstrap/Carousel'
import img1 from '../Imagenes/monedas1.jpeg'
import img2 from '../Imagenes/monedas2.jpeg'
import img3 from '../Imagenes/monedas3.jpeg'
const carousel  = () => {
return(
  <div className='container row mx-auto' id='Hobbies'>
    <div className='col-6'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>"Cobres" de 1857 y 1869</h3>
            <p>Estas monedas son las más antiguas que tengo en mi colección de monedas uruguayas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Vacas gordas y plata, plata</h3>
            <p>Época en dónde el dinero se respaldaba en plata y oro</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Diseños más lindos</h3>
            <p>De las uruguayas estos son los diseños que más me gustan</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className='col-6 mt-auto mb-auto'>
      <h5> Mi hobbie</h5>
      <p> Uno de mis hobbies, y el que mas me apasiona es coleccionar monedas. Actualmente tengo 1131 monedas de mas de 80 paises.
        Algunos de estos ya existintos como URSS, Ceilán, Indochina Francesa, entre otros tantos.</p>
      <p>Hace 1 año heredé alrededor de 100 monedas, me llamaron mucho la atención algunas de ellas y me puse a investigar. Desde ese momento revolví cuanto tarro encontré,
        muchos conocidos me hicieron llegar las suyas, he intercambiado y alguna he tenido que comprar.
      </p>
      <p>Si bien faltan 30 y pocas para terminar la coleccion uruguaya, se que va a ser muy dificil por el alto costo de alguna de ellas.</p>
    </div>
  </div>

)
}


export default carousel