import { h, app } from 'hyperapp'

export default function TopImg({ state, actions }) {
  return (
    <section className={'TopImg'}>
    <div className={'container'}>
      <div className={'title'}>
        <h5>
          Welcome
        </h5>
        <h1>
          Prime Steak
        </h1>
      </div>
      <div className={'contact-info'}>
        <div className={'booking'}>Book Table Directly</div>
        <h2>(407) 963 - 7465</h2>
        <div className={'hours'}>
          Opening Hours <strong>Mon - Fri:</strong> 9am - 9pm
            <strong> weekend:</strong> 9am - 11pm
        </div>
      </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>