import './Profile.css'
import foto from '../../img/foto.jpg'

const Profile = () => {
  return (
    <>
      <section className="profile">
        <h2>Johann Arty</h2>
        <img src={foto} alt="johann arty" className='profile-image'/>
      </section>

      <section className='description'>
      <p>
        His music has been supported by artists such as Abstract Division,
        Adriana Lopez, Ancient Methods, Antonio De Angelis, A Thousand Details,
        Axel Karakasis, Bernardo Hangar, Chris Liebing, Dave Clarke, David
        Leese, Dax J, Drumcell, Drop-E, DVS1, Fixeer, Fixon, HD Substance, Jörg
        Rodriguez, Kaiser, Marco Bailey, Michel Lauriola, Milo Raad, Oxygeno,
        Ricardo Garduno, Richie Hawtin, Sam Paganini, Slam, Svarog, Takaaki
        Itoh, Unbalance, Unkle Fon, Vegim and more.
      </p>
      <p>
        Being a member of the Insight agency roster allowed him to perform on
        different underground parties from Buenos Aires, including the
        recognized techno club Under Club.
      </p>
      <p>
        His sets focus on the evolving textures and atmospheres that each track
        evoques, incorporating a wide array of sounds that develop with weight
        and groove on the dancefloor.
      </p>
      </section>
    </>
  )
}

export default Profile