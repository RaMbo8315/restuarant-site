import { h, app } from 'hyperapp'

export default function RandomQuote({ state, actions }) {

  var slideIndex = 0;

  function slides() {
    var i;
    var quotes = document.getElementsByClassName("quote-slider");
    for (i = 0; i < quotes.length; i++) {
      quotes[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > quotes.length) {slideIndex = 1}
    quotes[slideIndex - 1].style.display = "block";
  }

  var quoteSlider = setInterval(slides, 3000)

  return (
    <div className={'parent'}>
      {state.randomQuoteData.map((item) => {
        return (
          <section id={'RandomQuote'} className={'quote-slider fade'} style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%), url(${item.img})`
          }}>
            <div className={'container'}>
              <h1>"{item.quote}"</h1>
              <span className={'author'}>- {item.author} -</span>
            </div>
          </section >
        )
      })}
    </div>
  )
}
