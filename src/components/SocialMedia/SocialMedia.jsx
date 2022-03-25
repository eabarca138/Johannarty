import './SocialMedia.css'
import instagram from '../../img/Instagram.png'
import youtube from '../../img/youtube.png'
import facebook from '../../img/facebook.png'
import soundcloud from '../../img/soundcloud.png'
import beatport from '../../img/beatport.png'
import residentadvisor from '../../img/residentadvisor.png'

const SocialMedia = () => {
  return (
    <section className="container">
      <div className='item'>
        <a target="_blank" href="https://www.instagram.com/johannarty/" rel="noopener noreferrer">
      <img src={instagram} alt="instagram" />
      </a>
      <a target="_blank" href="https://www.instagram.com/johannarty/" rel="noopener noreferrer">
      <h3>▰ instagram ▰</h3>
      </a>
      </div>
      <div className='item'>
        <a target="_blank" href="https://www.youtube.com/channel/UCG6yXhM5JTUUxeByPEb8u5g?view_as=subscriber" rel="noopener noreferrer">
      <img src={youtube} alt="youtube" />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCG6yXhM5JTUUxeByPEb8u5g?view_as=subscriber" rel="noopener noreferrer">
      <h3>▰ youtube ▰</h3>
      </a>
      </div>
      <div className='item'>
        <a target="_blank" href="https://www.facebook.com/JohannArtyOfficial/" rel="noopener noreferrer">
      <img src={facebook} alt="facebook" />
      </a>
      <a target="_blank" href="https://www.facebook.com/JohannArtyOfficial/" rel="noopener noreferrer">
      <h3>▰ facebook ▰</h3>
      </a>
      </div>
      <div className='item'>
        <a target="_blank" href="https://soundcloud.com/johannarty" rel="noopener noreferrer">
      <img src={soundcloud} alt="soundcloud" />
      </a>
      <a target="_blank" href="https://soundcloud.com/johannarty" rel="noopener noreferrer">
      <h3>▰ soundcloud ▰</h3>
      </a>
      </div>
      <div className='item'>
        <a target="_blank" href="https://www.beatport.com/artist/johann-arty/801145" rel="noopener noreferrer">
      <img className='beatport-img'  src={beatport} alt="beatport" />
      </a>
      <a target="_blank" href="https://www.beatport.com/artist/johann-arty/801145" rel="noopener noreferrer">
      <h3>▰ beatport ▰</h3>
      </a>
      </div>
      <div className='item'>
        <a target="_blank" href="https://www.residentadvisor.net/dj/johannarty" rel="noopener noreferrer">
      <img src={residentadvisor} alt="residentadvisor" />
      </a>
      <a target="_blank" href="https://www.residentadvisor.net/dj/johannarty" rel="noopener noreferrer">
      <h3>▰ resident advisor ▰</h3>
      </a>
      </div>
    </section>
  )
}

export default SocialMedia