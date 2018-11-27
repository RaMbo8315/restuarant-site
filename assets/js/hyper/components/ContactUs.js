import { h, app } from 'hyperapp'

export default function ContactUs({ state, actions }) {
  return (
    <section id={'ContactUs'} class={'texturebg'}>
      <div className={'container'}>
        <div className={'head'}>
          <h5>
            Contact Us
        </h5>
          <h2>
            We're Always Here To Help
        </h2>
        </div>
        <div className={'box'}>
          <div className={'row'}>
            <div className={'col-md-6'}>
              <div className={'title'}>
                Orlando, Florida
              </div>
              <h6 className={'Address'}>
                605 S. Orange Ave, <br />Orlando, Fl 32801
              </h6>
              <p>
                <strong>email: </strong> <a href={'mailto:info@primesteak.com'}>info@primesteak.com</a>
              </p>
            </div>
            <div className={'col-md-6'}>
              <h6>
                Phone:
                </h6>
              <div className={'title'}>
                (407) 586 - 3596
                </div>
              <h6>
                Lunch Service:
                </h6>
              <p>
                Friday, Saturday and Sunday <br />
                from 12pm - 1:30pm
                </p>
              <h6>
                Dinner Service:
                </h6>
              <p>
                Daily <br />
                from 6pm - 9:30pm
                </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
