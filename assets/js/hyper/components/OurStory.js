import { h, app } from 'hyperapp'

export default function OurStory({ state, actions }) {
    return (
        <section id={'OurStory'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <h5>
                            Our Story
                        </h5>
                        <h2>
                            Cooking is the art of adjustment
                        </h2>
                        <p>
                            Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.
                            Austin hot chicken franzen tumblr glossier chicharrones. Put a bird on it tousled cloud bread gastropub actually banh mi,
                            tumblr lomo everyday carry gentrify. Green juice vape neutra shaman.
                        </p>
                        <div className={'quote'}>
                            <strong>Peter David</strong> - Master Chef at AI Restaurant
                        </div>
                        <a href={'#'} className={'reserve-btn'}>Reserve</a>
                    </div>
                    <div className={'col-md-6'}>
                        <div className={'video-img'}>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
