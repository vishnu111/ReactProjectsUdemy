import "../App.css";
import "../main.css";
import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function ProfileHead() {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small">
          <div className="page-header-image"></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#">
                  <img src="./images/anthony.jpg" />
                </a>
              </div>
              <div className="h2 title">Vishnu Lokesh</div>
              <p className="category text-white">
                Web Developer, UI/UX Designer, Photographer
              </p>
              <a className="btn btn-primary smooth-scroll mr-2">Hire Me</a>
              <a
                className="btn btn-primary"
                href="./pdf/VishnuLokeshResume.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a className="btn btn-default btn-round btn-lg btn-icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="btn btn-default btn-round btn-lg btn-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="btn btn-default btn-round btn-lg btn-icon">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="btn btn-default btn-round btn-lg btn-icon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileHead;
