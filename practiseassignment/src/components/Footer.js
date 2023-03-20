import "../App.css";
import "../main.css";
import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a className="cc-facebook btn btn-link" href="#">
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </a>
        <a className="cc-twitter btn btn-link" href="#">
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </a>
        <a className="cc-google-plus btn btn-link" href="#">
          <i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>
        </a>
        <a className="cc-instagram btn btn-link" href="#">
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <div className="h4 title text-center">Vishnu Lokesh</div>
      <div className="text-center text-muted">
        <p>
          Vishnu Lokesh. All rights reserved.
          <br />
          <a className="credit" href=" " target="_blank">
            Thank you.
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
