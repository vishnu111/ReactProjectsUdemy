import "../App.css";
import "../main.css";
import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function Exp() {
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary">
              <div className="card-body cc-experience-header">
                <p>August 2020 - Present</p>
                <div className="h5">TCS</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="h5">Front End Developer</div>
                <p>
                  Collaborating with Drupal Developers to integrate UI features
                  complying with prescribed code standards andtechnical design
                  guidelines. Also, Developed, coded and updated sites for
                  clients such as Johnson & Johnson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Exp;
