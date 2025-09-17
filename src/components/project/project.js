import { useEffect, useState } from 'react';
import './project.css';

const projects = [
  {
    image: '/project/portfolio.jpg',
    title: "Portfolio Website",
    description: "A personal website to showcase my skills and projects.",
    tech: ["React", "CSS"],
    demo: "#",
    code: "",
  },
  {
    image: '/project/ETL_Pipeline.png',
    title: "ETL Pipeline with Airflow & Cloud Data Warehouse",
    description: "Built an automated ETL pipeline with Airflow to extract data from APIs, transform it in Python, and load it into snowflake. Enabled scheduled, reliable pipelines for analytics dashboards.",
    tech: ["Apache Airflow","Python", "SQL", "Snowflake", "AWS S3", "Tableau"],
    demo: "#",
    code: "",
  },
  {
    image: '/project/Data_streaming.png',
    title: "Real-Time Data Streaming with Kafka",
    description: "A Real-time chat application where users can chat with each other. Developed a streaming pipeline using Kafka and Spark to process live event data and store results in PostgreSQL. Delivered real-time insights through dashboards in Tableau.",
    tech: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Tableau","Docker"],
    demo: "#",
    code: "",
  },
  {
    image: '/project/Data_Lakehouse.png',
    title: "Data Lakehouse on AWS",
    description: "Designed a lakehouse architecture on AWS using S3, Glue, and Redshift. Used dbt for transformations to support both BI reporting and ML workloads.",
    tech: ["AWS S3", "dbt", "Redshift", "Airflow", "Power BI"],
    demo: "#",
    code: "",
  },
  {
    image: "/project/End-to-End.png",
    title: "End-to-End Data Platform for Analytics & ML",
    description: "Created a platform that ingests, processes, and stores e-commerce data for reporting and ML predictions. Automated pipelines with Airflow ensured fresh data for churn prediction models and dashboards.",
    tech: ["Airflow", "Spark", "Snowflake", "scikit-learn", "MLflow", "Docker", "Tableau"],
    demo: "#",
    code: "",
  },
  {
    image: "/project/Data_Quality_Monitoring_System.png",
    title: "Data Quality & Monitoring System",
    description: "Implemented automated data validation with Great Expectations integrated into Airflow pipelines. Added Slack alerts for failures, improving trust and reliability in analytics.",
    tech: ["Airflow", "Redshift", "AWS S3", "Great Expectations", "Slack API"],
    demo: "#",
    code: "",
  },
];

function Project() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setIsVisible]);

  return (
    <section
      id="projects"
      className={`projects-section ${isVisible.projects ? 'visible' : ''}`}
      data-animate
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${(index * 0.2)}s` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {(project.tech || []).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="project-buttons">
                  <button className="btn-project">View Demo</button>
                  <button className="btn-project-secondary">Source Code</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
