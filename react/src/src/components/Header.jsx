import Logo from '../assets/logo.png'

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
