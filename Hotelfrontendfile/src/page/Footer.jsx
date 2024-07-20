import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (
   <>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <ul class="social-links">
          <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Contact Us</h5>
        <p><i class="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA</p>
        <p><i class="fas fa-phone"></i> (123) 456-7890</p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div class="col-md-3">
        <h5>Newsletter</h5>
        <p>Stay up to date with our latest news and updates!</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <p>&copy; 2024 Company Name ExcelR. All rights reserved.</p>
  </div>
</footer>
   </>
  );
};

export default Footer;
