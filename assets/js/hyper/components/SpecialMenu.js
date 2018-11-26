import { h, app } from 'hyperapp'

export default function SpecialMenu({ state, actions }) {
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
                    <div className={'col-md-4'}>
                        <div className={'box'}>
                            <div className={'box-img'}>
                                <div className={'price-circle'}>$25</div>
                            </div>
                            <span className={'title'}>Super BBQ Grill No Smoke</span>
                            <p className={'details'}>Fried eggs, steak, bake potatoe or french fries,
                                side of vegetables
                            </p>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'box'}>
                            <div className={'box-img'}>
                                <div className={'price-circle'}>$25</div>
                            </div>
                            <span className={'title'}>Super BBQ Grill No Smoke</span>
                            <p className={'details'}>Fried eggs, steak, bake potatoe or french fries,
                                side of vegetables
                            </p>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'box'}>
                            <div className={'box-img'}>
                                <div className={'price-circle'}>$25</div>
                            </div>
                            <span className={'title'}>Super BBQ Grill No Smoke</span>
                            <p className={'details'}>Fried eggs, steak, bake potatoe or french fries,
                                side of vegetables
                            </p>
                        </div>
                    </div>
                </div>
                <a href={'#'} className={'link'}>View Full Menu</a>
            </div>
        </section>
    )
}
