import { h, app } from 'hyperapp'

export default function Footer({ state, actions }) {
    return (
        <footer>
            <div className={'container'}>
                <nav className={'menu'}>
                    <a href={'#OurStory'}>Our Story</a>
                    <a href={'#Reviews'}>Reviews</a>
                    <a href={'#SpecialMenu'}>Special Menus</a>
                    <a href={'#'}>Reservations</a>
                    <a href={'#Promotions'}>Promotions</a>
                    <a href={'#ContactUs'}>Contact Us</a>
                </nav>
                <ul className={'social-media'}>
                    <li>
                        <a href={'http://www.facebook.com'} target={'new'}>
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'http://www.twitter.com'} target={'new'}>
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'http://www.google.com'} target={'new'}>
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'http://www.youtube.com'} target={'new'}>
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
                <div className={'copyright'}>
                    <i class="far fa-copyright"></i> 2018 copyright
                </div>
            </div>
        </footer >
    )
}
