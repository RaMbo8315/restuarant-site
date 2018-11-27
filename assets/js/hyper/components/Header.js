import { h, app } from 'hyperapp'

export default function Header({ state, actions }) {
  return (
    <header>
      <div className={'container'}>
        <div className={'logo'}>
          Logo
       </div>
        <nav>
          <a href={'#OurStory'}>Our Story</a>
          <a href={'#Reviews'}>Reviews</a>
          <a href={'#SpecialMenu'}>Special Menus</a>
          <a href={'#'}>Reservations</a>
          <a href={'#Promotions'}>Promotions</a>
          <a href={'#ContactUs'}>Contact Us</a>
          <a href={'#Map'}>Map</a>
        </nav>
      </div>
    </header>
  )
}

