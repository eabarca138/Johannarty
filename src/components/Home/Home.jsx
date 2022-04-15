import SCWidget from './../SCWidget/SCWidget'
import './Home.css'
import foto from '../../img/foto.jpg'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const Home = () => {
  const styles = {
    fadeIn: {
      animation: 'x .7s',
      animationName: Radium.keyframes(fadeIn, 'fade')
    }
  }
  
  return (
    <StyleRoot>
    <section className="hero">
      <img src={foto} alt="johann arty" className='hero-image' style={styles.fadeIn}/>
    </section>

    <SCWidget />
    </StyleRoot>
  ) 
}

export default Home