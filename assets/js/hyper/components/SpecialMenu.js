import { h, app } from 'hyperapp'

export default function SpecialMenu({ state, actions }) {

    var loopMenu = function () {
        return state.specialMenuData.map(function (item) {
            return (
                <div className={'col-md-4'}>
                    <div className={'box'}>
                        <div className={'box-img'}>
                            <div className={'price-circle'}>{item.price}</div>
                        </div>
                        <span className={'title'}>{item.title}</span>
                        <p className={'details'}>{item.description}
                        </p>
                    </div>
                </div>
            )
        })
    }

    return (
        <section id={'SpecialMenu'} className={'texturebg'}>
            <div className={'container'}>
                <h5 className={'comp-title'}>
                    Special Menu
                </h5>
                <h2>
                    Delicious Flavor of autumn
                </h2>
                <div className={'row boxes'}>
                    {loopMenu()}
                </div>
                <a href={'#'} className={'link'}>View Full Menu</a>
            </div>
        </section>
    )
}
