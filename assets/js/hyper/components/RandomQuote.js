import { h, app } from 'hyperapp'

export default function RandomQuote({ state, actions }) {
  return (
    <section id={'RandomQuote'}style={{
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%), url(https://static01.nyt.com/images/2018/03/01/dining/01COOKING-CHICKEN-CURRY1/01COOKING-CHICKEN-CURRY1-threeByTwoMediumAt2X.jpg)'
    }}>
      <div className={'container'}>
        <h1>"Good painting is like good cooking; it can be tasted, but not explained."</h1>
        <span className={'author'}>- Charles -</span>
      </div>
    </section >
  )
}
