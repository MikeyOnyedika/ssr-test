import Logo from '../assets/logo.png'
import FreeWifi from '../assets/free-wifi.png'
import Sumup from '../assets/sumup.jpg'

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-white py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <p>
                <a
                  href="https://facebook.com/Barber-Shop/Walsworth-Barbershop-903311753016665"
                  target="_blank"
                ><i className="fab fa-facebook fa-2x fa-fw"></i
                ></a>
                <a
                  href="https://instagram.com/walsworth.barbershop"
                  target="_blank"
                ><i className="fab fa-instagram fa-2x fa-fw"></i
                ></a>
              </p>
              <p><a href="privacy.html">Privacy Policy</a></p>
              <img
                className="img-fluid"
                src={FreeWifi}
                width="150"
                alt="Free W-Fi"
              />
            </div>
            <div className="col-md-4 my-5">
              <p className="mb-5">
                We accept bash and card payments, including Apple Pay and Android
                Pay.
              </p>
              <img
                className="img-fluid mb-5"
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
            <div className="col-md-4">
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
