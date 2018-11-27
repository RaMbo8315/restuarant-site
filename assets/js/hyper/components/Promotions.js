import { h, app } from 'hyperapp'

export default function Promotions({ state, actions }) {
    return (
        <section id={'Promotions'} class={'texturebg'}>
            <div className={'container'}>
                <h5 className={'comp-title'}>
                    Our News
                </h5>
                <h2>
                    Promotions & Events
                </h2>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <div className={'promo-img'}>
                            <img src={'/img/italian.jpg'} />
                        </div>
                        <div className={'content'}>
                            <h5>
                                Best Sauteed <br />Onions - Let's Enjoy!
                            </h5>
                            <p className={'dash'}>--------</p>
                            <p>
                                596 N. Orange Ave, Orlando, FL 32806<br />
                                10am - 3pm <br /> Monday, Feb. 26, 2019
                            </p>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'content'}>
                            <h5>
                                Become A Super Chef So <br />Easy With Us
                            </h5>
                            <p className={'dash'}>--------</p>
                            <p>
                                256 Delaney Ave, Orlando, FL 32806<br />
                                12pm - 4pm <br /> Saturday, Mar. 18, 2019
                            </p>
                        </div>
                        <div className={'promo-img'}>
                            <img src={'/img/chef.jpg'} />
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'promo-img'}>
                            <img src={'/img/restaurant.jpg'} />
                        </div>
                        <div className={'content'}>
                            <h5>
                                Art Photography In <br />Foody
                            </h5>
                            <p className={'dash'}>--------</p>
                            <p>
                                4512 N. Orange Ave, Orlando, FL 32806<br />
                                6pm - 9pm <br /> Friday, Jun. 21, 2019
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
