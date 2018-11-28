import { h, app } from 'hyperapp'

export default function RandomQuote({ state, actions }) {

  // var quoteScroll = setInterval(quotes, 5000)

  return (
    <section id={'RandomQuote'} style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%), url(https://static01.nyt.com/images/2018/03/01/dining/01COOKING-CHICKEN-CURRY1/01COOKING-CHICKEN-CURRY1-threeByTwoMediumAt2X.jpg)'
    }}>
      <div className={'container'}>
        <h1>"{state.randomQuoteData[state.quoteStatus.currentQuote].quote}"</h1>
        <span className={'author'}>- {state.randomQuoteData[state.quoteStatus.currentQuote].author} -</span>
      </div>
    </section >
  )
}
