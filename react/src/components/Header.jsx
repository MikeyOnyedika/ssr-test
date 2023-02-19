import Logo from '../assets/logo.png'

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
        <div className="container">
          <a className="navbar-brand" href="index.html"
          ><img
              className="img-fluid"
              src={Logo}
              width="250"
              alt="Walsworth Barbershop Logo"
            /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html"
                >Home <span className="sr-only">(current)</span></a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gallery.html">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary"
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
