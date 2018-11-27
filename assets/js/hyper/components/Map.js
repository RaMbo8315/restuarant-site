import { h, app } from 'hyperapp'

export default function Map({ state, actions }) {
    return (
        <section id={'Map'}>
            <div className={'full-map'}>
                <img src={'/img/map.png'} />
            </div>
        </section>
    )
}
