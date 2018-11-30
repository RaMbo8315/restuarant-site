import { h, app } from 'hyperapp'

export default function TopBTN({ state, actions }) {

    document.onscroll = function () {
        if (document.documentElement.scrollTop != 0) {
            document.getElementById('top-arrow').style.opacity = .8;
        } else {
            document.getElementById('top-arrow').style.opacity = 0;
        }
    }

    return (
        <div id={'topBTN'}>
            <a href={'#TopImg'}>
                <i id={'top-arrow'} class="fas fa-arrow-up"></i>
            </a>
        </div>
    )
}

