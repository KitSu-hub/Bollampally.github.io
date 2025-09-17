import './about.css';
function About(){
    return(
        <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Data Engineer with 3+ years of experience building scalable data pipelines, ML models, and advanced 
                analytics solutions across finance, healthcare, and retail. Skilled in Python, SQL, Spark, Kafka, 
                dbt, Airflow, and cloud platforms (AWS, Azure, GCP). Proven track record delivering ETL workflows, 
                BI dashboards, and ML pipelines that improved dataquality, compliance, forecasting accuracy, and business decision-making.
              </p>

              <div className="timeline">

                  <div className="timeline-item">
                  <div className="timeline-year">Aug 2024 - Present<p>1+ years</p></div>
                  <div className="timeline-content">
                    <h4>Data Engineer</h4>
                    <p>VantageERP LLC </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">May 2021 - July 2023<p>2+ years</p></div>
                  <div className="timeline-content">
                    <h4>Data Scientist(ML)</h4>
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