import React from 'react'
import Chairs from '../../assets/chairs.jpg'
import Chairs2 from '../../assets/chairs2.jpg'
import Logo from '../../assets/logo.png'
import Img1 from '../../assets/image1.jpg'
import Img15 from '../../assets/image15.jpg'
import WaitingRoom from '../../assets/waiting-room.jpg'
import WaitingRoom2 from '../../assets/waiting-room2.jpg'

export { Page }

function Page() {
  return (
    <>
      <header>
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
            <li data-target="#carousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(${Chairs})` }}
            >
              <div className="carousel-caption">
                <h1 className="mb-5">Welcome to</h1>
                <img
                  className="img-fluid mb-5"
                  src={Logo}
                  width="500"
                  alt="Walsworth Barbershop Logo"
                />
                <h3 className="mb-5">Now open for bookings and walk-ins!</h3>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${Chairs2})` }}
            >
              <div className="carousel-caption">
                <h1 className="mb-5">Welcome to</h1>
                <img
                  className="img-fluid mb-5"
                  src={Logo}
                  width="500"
                  alt="Walsworth Barbershop Logo"
                />
                <h3 className="mb-5">Now open for bookings and walk-ins!</h3>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${WaitingRoom})` }}
            >
              <div className="carousel-caption">
                <h1 className="mb-5">Welcome to</h1>
                <img
                  className="img-fluid mb-5"
                  src={Logo}
                  width="500"
                  alt="Walsworth Barbershop Logo"
                />
                <h3 className="mb-5">Now open for bookings and walk-ins!</h3>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${WaitingRoom2})` }}
            >
              <div className="carousel-caption">
                <h1 className="mb-5">Welcome to</h1>
                <img
                  className="img-fluid mb-5"
                  src={Logo}
                  width="500"
                  alt="Walsworth Barbershop Logo"
                />
                <h3 className="mb-5">Now open for bookings and walk-ins!</h3>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>

      {/* <!-- Page Content --> */}
      <div className="container my-5">
        {/* <!-- Covid Section --> */}
        <section className="text-center mb-5">
          <div className="card bg-primary text-light">
            <div className="card-body">
              <h2 className="mb-5">We are a Covid-safe premises</h2>
              <p>During Covid, we are determined to ensure your safety.</p>
              <p>
                We are following the latest Government guidelines and kindly ask
                you do the same.
              </p>
              <p>
                If you can, please wear a face covering inside our premises and
                maintain social distancing with other customers.
              </p>
              <p>
                We sanitize all areas after another customer has used them and
                will continue to maintain a clean and safe environment.
              </p>
              <a
                className="btn btn-secondary"
                href="https://www.gov.uk/coronavirus"
                target="_blank"
              >Read the Covid-19 Government Guidelines</a
              >
            </div>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section className="mb-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <img
                className="img-fluid"
                src={Img1}
                alt="Walsworth Barbershop Storefront"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="mb-5">
                Your friendly, professional and local barbershop
              </h2>
              <p>Welcome to Walsworth Barbershop.</p>
              <p>We are a 2-story barbershop on Walsworth Road, Hitchin.</p>
              <p>
                Our professional, experienced staff offer a variety of services
                including modern and traditional haircuts, restyles, skinfades,
                beard trims and more!
              </p>
              <a className="btn btn-primary mb-5" href="#services"
              >See Our Full Range</a
              >
              <p>
                With a relaxing, welcoming atmosphere and a team of friendly,
                non-discriminative professionals, we can assure you will be well
                looked after here at Walsworth Barbershop.
              </p>
              <p>
                <i className="fas fa-check text-primary"></i>
                <b>All hair types welcome</b>
              </p>
              <p>
                <i className="fas fa-check text-primary"></i>
                <b>Walk-ins and appointments welcome</b>
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Booking Section --> */}
        <section className="text-center mb-5">
          <div className="card bg-primary text-light">
            <div className="card-body">
              <h2 className="mb-5">Book now to avoid the queue</h2>
              <p>
                While we always accept walk-ins, we have launched an online
                booking system for you to reserve your appointment online.
              </p>
              <p>
                Not only does this get the most efficient service possible, but
                helps us to keep you safe during Covid.
              </p>
              <p>
                Walk-in or not, we have a relaxing waiting area for our clients
                with a TV, free Wi-Fi and refreshments.
              </p>
              <a className="btn btn-secondary" href="bookingsystem" target="_blank"
              >Book Online Today</a
              >
            </div>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section className="mb-5" id="services">
          <div className="row">
            <div className="col-md-6 align-self-center mb-5">
              <h2 className="mb-5">Our range of services include</h2>
              <ul>
                <li>Modern and traditional haircuts</li>
                <li>Restyles</li>
                <li>Skinfades</li>
                <li>Beard trims</li>
                <li>Traditional hot towel wet shaves</li>
                <li>Hair and beard conditioning treatments</li>
                <li>Facial treatments</li>
                <li>Eye brow shaping</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={Img15}
                alt="Walsworth Barbershop Storefront"
              />
            </div>
          </div>
        </section>

        {/* <!-- Testimonials Section --> */}
        <section className="text-center mb-5">
          <h2 className="mb-5">What our clients say</h2>
          <p>
            We have a wide variety of clients who we cater for, but don't take our
            word for it!
          </p>
          <p className="mb-5">See what they've been saying about us...</p>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-primary">
                    <i className="fas fa-comment-dots"></i>
                  </h1>
                  <p className="card-text">
                    "First time using this barbers and I'm impressed. I went in
                    not really knowing what to ask for but knowing my hair needed
                    a cut, I don't often use barbers as you can guess so it was a
                    great help that Angelica pointed me in the right direction,
                    what I really like is that they take time to get the cut right
                    and talk you through it. Will definitely be my go to barbers
                    from now on."
                  </p>
                </div>
                <div className="card-footer">
                  <p className="card-text">Ian Johnson</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-primary">
                    <i className="fas fa-comment-dots"></i>
                  </h1>
                  <p className="card-text">
                    "Had a bad cut somewhere else and then found these guys. Not
                    only were they friendly and understanding but they saved my
                    hair and sanity. Next time I'll be going there for my normal
                    cut."
                  </p>
                </div>
                <div className="card-footer">
                  <p className="card-text">Matt Grant</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-primary">
                    <i className="fas fa-comment-dots"></i>
                  </h1>
                  <p className="card-text">
                    "Been coming here a while now, great barbershop with great
                    staff. They always cut my hair how I want it and go above and
                    beyond to ensure the customer is happy. Service is second to
                    none. Very relaxed environment to get your hair cut good for
                    adults and kids. Definitely the best barbershop in Hitchin.
                    Try it, you won't be disappointed."
                  </p>
                </div>
                <div className="card-footer">
                  <p className="card-text">Cameron Ragiwala</p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.google.com/search?q=walsworth+barbershop#lrd=0x487633eeb7a9c0cf:0xd70b7c1dd8edfeec,1,,,"
            target="_blank"
          >Read more on Google Reviews</a
          >
        </section>
      </div>
    </>
  )
}
