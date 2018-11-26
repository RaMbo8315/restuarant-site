import { h, app } from 'hyperapp'

export default function Reviews({ state, actions }) {
    return (
        <section id={'Reviews'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <div className={'side-img'}>
                            <img src={'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg'} />
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <h5 className={'comp-title'}>Reviews</h5>
                        <h2>
                            The Food Masters Say About Us
                        </h2>
                        <h4>
                            "The Best Restaurant in Orlando!"
                        </h4>
                        <p>
                            Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.
                            Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman.
                        </p>
                        <div className={'author'}><strong>Sandra Bennington</strong> - <em>winner of the chef masters</em></div>
                        <div className={'arrows'}>
                            <i class="fas fa-arrow-left" aria-hidden={'true'}></i>
                            <i class="fas fa-arrow-right ready" aria-hidden={'true'}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
