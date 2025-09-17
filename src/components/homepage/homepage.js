import {
  Download,
  Github,
  GraduationCap,
  Handshake,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './homepage.css';
import profilePic from './profile.png';

const FULL_DESCRIPTION = `  Data Engineer with a background in Data Science and Machine Learning. Experienced in building scalable data pipelines, optimizing infrastructure, and enabling data-driven insights. Skilled at bridging engineering and ML to deliver impactful, production-ready solutions.`;

const Homepage = () => {
  const titleRef = useRef(null);
  const [decryptedText, setDecryptedText] = useState('');

  useEffect(() => {
    // Title blur-slide animation
    if (titleRef.current) {
      titleRef.current.classList.add('animate-blur');
    }

    // Decrypt typing animation for description
    let i = 0;
    const interval = setInterval(() => {
      setDecryptedText(prev => prev + FULL_DESCRIPTION[i]);
      i++;
      if (i >= FULL_DESCRIPTION.length-1) {
        clearInterval(interval);
      }
    }, 15); // speed in ms per char

    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'sai_Krishna_Reddy_Bollampally_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='Homepage'>
      <div className="homepage">
        <div className="container">
          <div className="hero-section">

            {/* Profile Section */}
            <div className="profile-content">
              <div className="profile-text">
                <h1 className="hero-title" ref={titleRef}>
                  Hi, I'm{' '}
                  <span className="name-highlight">
                    Sai Krishna Reddy Bollampally
                  </span>
                </h1>
                <p className="hero-subtitle">
                  Data Engineer | Data Scientist | ML Enthusiast
                </p>
                <p className="hero-description decrypting">
                  {decryptedText}
                </p>
              </div>

              {/* Location */}
              <div className="location">
                <GraduationCap className="location-icon" />
                <span>University of Texas at Arlington</span>
                <MapPin className="location-icon" />
                <span>Dallas, TX</span>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button
                  onClick={handleResumeDownload}
                  className="btn-primary"
                >
                  <Download className="btn-icon" />
                  Download Resume
                </button>

                <a href="mailto:saikrishna9569@gmail.com" className='get-in-touch'>
                  <button className="btn-secondary">
                    <Handshake className="btn-icon" />Get In Touch
                  </button>
                </a>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a
                  href="https://github.com/KitSu-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-reddy-bollampally-410000226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="social-icon" />
                </a>
                <a
                  href="mailto:saikrishna95569@gmail.com"
                  className="social-link"
                >
                  <Mail className="social-icon" />
                </a>
              </div>
            </div>

            {/* Profile Picture Section */}
            <div className="profile-picture-section">
              <div className="profile-picture-container">
                <div className="bg-circle-1"></div>
                <div className="bg-circle-2"></div>

                <div className="profile-picture">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="profile-overlay"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills/Tech Stack Preview */}
          <div className="tech-section">
            <h3 className="tech-title">Frequently Used Tools & Technologies</h3>
            <div className="tech-grid">
              {['scikit-learn', 'Python', 'SQL', 'Spark', 'Kafka', 'dbt', 'Airflow', 'Power BI', 'Docker'].map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
