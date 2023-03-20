import "../App.css";
import "../main.css";
import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function Edu() {
  return (
    <div className="section">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary">
              <div className="card-body cc-education-header">
                <p>2016 - 2020</p>
                <div className="h5">Bachelor of Technology</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="h5">Computer Science Engineering</div>
                <p className="category">
                  NBKR Institute of Science and Technology
                </p>
                <p>
                  In my under graduate programm, I have explored Digital Logic,
                  Computer Architecture, Compiler Design, Database Management
                  Systems, Design & Analysis of Algorithms and Soft Computing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary">
              <div className="card-body cc-education-header">
                <p>2014 - 2016</p>
                <div className="h5">Intermediate</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="h5">Maths, Physics and Chemistry</div>
                <p className="category">
                  Andhra Pradesh Board of Intermediate Education
                </p>
                <p>
                  In my intermediate education, I studied core concepts of
                  mathematics like Algebra, Probability, Coordinate Geometry and
                  Calculus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 bg-primary">
              <div className="card-body cc-education-header">
                <p>2013-2014</p>
                <div className="h5">High School</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <div className="h5">Science and Mathematics</div>
                <p className="category">
                  Andhra Pradesh Board of Secondary Education.
                </p>
                <p>
                  I completed the core courses of study which includes classes
                  in English, mathematics, science, and social studies in high
                  school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edu;
