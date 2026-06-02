import RightArrowIcon from "../icons/RightArrowIcon"
import CarIcon from "../icons/CarIcon"
import InstagramIcon from "../icons/InstagramIcon"
import FacebookIcon from "../icons/FacebookIcon"
import TikTokIcon from "../icons/TikTokIcon"

const Footer = () => {
  return (
    <footer className="footer" id="book">
      <div className="footer-content">
        <div className="foot-cta">
          <h2>Your car deserves<br />world-class detail</h2>
          <a className="foot-cta-btn" href="#book">
            Book Now
            <RightArrowIcon />
          </a>
        </div>

        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <CarIcon />
              Pro Room Detailing
            </a>
            <p>Premium car detailing services — certified technicians, top-grade products, and flawless results, every single time.</p>
            <div className="foot-social">
              <a href="https://www.instagram.com/proroomdetailing/" target="_blank" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/people/PRO-ROOM-Detailing/61574453804967/" target="_blank" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.tiktok.com/@proroomdetailing_" target="_blank" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Interior Detailing</a></li>
              <li><a href="#services">Exterior Detailing</a></li>
              <li><a href="#services">Ceramic Coating</a></li>
              <li><a href="#services">Paint Correction</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Booking Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-divider" />
        <div className="foot-bottom">
          <span>Perfection in every detail.</span>
          <span>© 2026 Pro Room Detailing</span>
        </div>
      </div>

      <div className="foot-wordmark-wrap" aria-hidden="true">
        <div className="foot-wordmark">Pro Room Detailing</div>
      </div>
    </footer>
  )
}

export default Footer
