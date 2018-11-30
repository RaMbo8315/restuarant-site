import { h, app } from 'hyperapp'

export default function Reviews({ state, actions }) {

    var currentReview = function () {
        return (
            <div>
                <h5 className={'comp-title'}>Reviews</h5>
                <h2>
                    {state.reviewsData[state.reviewStatus.currentReview].company}
                </h2>
                <h4>
                    "{state.reviewsData[state.reviewStatus.currentReview].highlight}"
                </h4>
                <p>
                    {state.reviewsData[state.reviewStatus.currentReview].review}
                </p>
                <div className={'author'}><strong>{state.reviewsData[state.reviewStatus.currentReview].author}</strong> - <em>{state.reviewsData[state.reviewStatus.currentReview].authorInfo}</em></div>
            </div>
        )
    }

    var leftClickBTN = function() {
        if (state.reviewStatus.currentReview == 0) {
        } else {
            actions.reviewLeftClicked()
        }
    }

    var rightClickBTN = function() {
        if (state.reviewStatus.currentReview == (state.reviewsData.length - 1)) {
        } else {
            actions.reviewRightClicked()
        }
    }

    return (
        <section id={'Reviews'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-7'}>
                        <div className={'side-img'}>
                            <img src={'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg'} />
                        </div>
                    </div>
                    <div className={'col-md-5'}>
                        {currentReview()}
                        <div className={'arrows'}>
                            <i class={`fas fa-arrow-left ${(state.reviewStatus.currentReview > 0) 
                            ? 'ready' : 'cursor'}`} aria-hidden={'true'}
                            onclick={leftClickBTN}></i>
                            <i class={`fas fa-arrow-right ${(state.reviewStatus.currentReview == 
                            (state.reviewsData.length - 1)) ? 'cursor' : 'ready'}`} aria-hidden={'true'}
                            onclick={rightClickBTN}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
