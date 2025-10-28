import './about.css';
function About(){
    return(
        <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">My Expertise</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                <ul>
                <li>Data Scientist with 3+ years of experience specializing in Data Analysis, 
                  BI tools, and Machine Learning.</li>
                <li>Experienced with Statistical Modelling, Data Extraction, Data Cleaning, 
                  Data Screening, Data Exploration and Data Visualization of Structured and 
                  Unstructured datasets.</li>
                <li>Knowledge on Deep Learning, Neural Networks & Artificial Intelligence.</li>
                <li>Knowledge of advanced statistical techniques & concepts and a 
                  Variety of Machine Learning techniques with their real world advantages/drawbacks.</li>
                </ul>


              </p>

              <div className="timeline">

                  <div className="timeline-item">
                  <div className="timeline-year">Aug 2024 - Present<p>1+ years</p></div>
                  <div className="timeline-content">
                    <h4>Data Scientist</h4>
                    <p>VantageERP LLC </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">May 2021 - July 2023<p>2+ years</p></div>
                  <div className="timeline-content">
                    <h4>Data Analyst</h4>
                    <p>Vision Tree </p>
                  </div>
                </div>





              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default About;