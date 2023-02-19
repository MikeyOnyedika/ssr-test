import React from 'react'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'
import Logo from '../assets/logo.png'
import FreeWifi from '../assets/free-wifi.png'
import Sumup from '../assets/sumup.jpg'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header />
        {children}
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  )
}


function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
        <div class="container">
          <a class="navbar-brand" href="index.html"
          ><img
              class="img-fluid"
              src={Logo}
              width="250"
              alt="Walsworth Barbershop Logo"
            /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html"
                >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery.html">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-primary"
                  href="https://walsworthbarbers.co.uk/bookingsystem"
                  target="_blank"
                >Book Now</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer class="bg-secondary text-white py-5">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-4">
              <p>
                <a
                  href="https://facebook.com/Barber-Shop/Walsworth-Barbershop-903311753016665"
                  target="_blank"
                ><i class="fab fa-facebook fa-2x fa-fw"></i
                ></a>
                <a
                  href="https://instagram.com/walsworth.barbershop"
                  target="_blank"
                ><i class="fab fa-instagram fa-2x fa-fw"></i
                ></a>
              </p>
              <p><a href="privacy.html">Privacy Policy</a></p>
              <img
                class="img-fluid"
                src={FreeWifi}
                width="150"
                alt="Free W-Fi"
              />
            </div>
            <div class="col-md-4 my-5">
              <p class="mb-5">
                We accept bash and card payments, including Apple Pay and Android
                Pay.
              </p>
              <img
                class="img-fluid mb-5"
                src={Sumup}
                width="250"
                alt="Sumup Certified Partner"
              />
              <p>
                Copyright &copy; Walsworth Barbers
                <script>
                  document.write(new Date().getFullYear());
                </script>
              </p>
            </div>
            <div class="col-md-4">
              <p>Mon - 9am to 6pm</p>
              <p>Tue - CLOSED</p>
              <p>Wed, Thu, Fri - 9am to 6pm</p>
              <p>Sat - 8am to 5pm</p>
              <p>Sun - CLOSED</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
