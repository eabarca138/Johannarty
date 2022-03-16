import SCWidget from './../SCWidget/SCWidget'

import './Home.css'
import foto from '../../img/foto.jpg'

const Home = () => {
  return (
    <>
    <section className="hero">
      <img src={foto} alt="johann arty" className='hero-image'/>
    </section>

    <SCWidget />
    </>
  ) 
}

export default Home