import "../App.css";
import "../main.css";
import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function Skills() {
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">HTML</span>
                  <div className="progress">
                    <div
                      style={{ width: "90%" }}
                      className="progress-bar progress-bar-primary"
                    ></div>
                    <span className="progress-value">90%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">CSS</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">JavaScript</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">SASS</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Bootstrap</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">75%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Java</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">92%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Data Structures</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">70%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Drupal</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary"></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
