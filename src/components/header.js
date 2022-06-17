import world_image from '../img/world.png'
export default function Header() {
  return (
    <section className="header">
      <img className='header__image' src={world_image}></img>
      <h1 className="header__title">
        Travel journal
      </h1>
    </section>
  )
}