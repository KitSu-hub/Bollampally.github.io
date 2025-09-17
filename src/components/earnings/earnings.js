import { useEffect, useState } from 'react';
import "./earnings.css";

const Earnings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  console.log(isVisible);
  console.log(hoveredCard);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  //certifications data   <a href="/Resume.pdf" download>Download Resume</a>
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development with MERN STACK & GenAI 2025",
      issuer: "Udemy",
      category: "frontend",
      color: "orange-red",
      date:"2025",
      icon: "⚛️",
      skills: ["HTML", "CSS", "JavaScript","Bootstrap","Node.js","Express.js","MangoDB","AI Prompting","Cursor AI"],
      url:"/pdf/Full Stack Web Development with MERN Stack, GenAI.pdf"
    },

    {
      id: 2,
      title: "Getting Started with DevOps",
      issuer: "Amazon Web Services",
      category: "cloud",
      color: "purple-pink",
      date:"2025",
      icon: "⚙️",
      skills: ["Security", "Observability", "Monolithic and MicroServices", "Amazon Elastic Compute Cloud", "CI/CD Pipeline", "DevOps Methodology"],
      url:"/pdf/Getting Started with DevOps on AWS.pdf"
    },
    
    {
      id: 3,
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      category: "ai",
      color: "green-blue",
      date:"2025",
      icon: "🤖",
      skills: ["Vertex AI", "Prompt Engineering", "Image Analysis", "Multimodal Generative Techniques", "Google Gemini AI"],
      url: "/pdf/prompt-design-in-vertex-ai-skill-badge.png"
    },
    {
      id: 4,
      title: "Inroduction to Generative AI- Art of the Possible",
      issuer: "Amazon Web Services",
      category: "ai",
      color: "blue-indigo",
      date:"2025",
      icon: "📊",
      skills: ["Generative AI", "Promtp Engineer", "Amazon Web Services"], 
      url:"/pdf/Introduction to Generative AI - Art of the Possible.pdf"
    },
    {
      id: 5,
      title: "Develop applications with Azure OpenAI in Foundry Models",
      issuer: "Microsoft",
      category: "ai",
      color: "red-purple",
      date:"2025",
      icon: "🛡️",
      skills: ["Azure OpenAI", "Generative AI", "Prompt Engineeringg"],
      url: "/pdf/Develop applications with Azure OpenAI in Foundry Models.pdf"
    },
    {
      id: 6,
      title: "Step into Robotic Process Automation",
      issuer: "GUVI",
      category: "other",
      color: "cyan-blue",
      icon: "🤖",
      skills: ["Robotic Process Automation", "Workflow Automation", "UI Automation"],
      url: "pdf/Step into Robotic Process Automation.png"
    },
    {
      id: 7,
      title: "Game Development using PyGame",
      issuer: "GUVI",
      category: "other",
      color: "cyan-blue",
      icon: "🤖",
      skills: ["Fundamentals of Game Development", "PyGame Library", "Game Physics and Mechanics"],
      url: "/pdf/Game Development using PyGame.png"
    },
    {
      id: 8,
      title: "Programming Essentials in C",
      issuer: "Cisco",
      category: "other",
      color: "cyan-blue",
      icon: "🏗️",
      skills: ["Functions", "Arrays and Strings", "Pointers and Memory", "Structures and File Handling"],
      url: "/pdf/Programming Essentials in C.pdf"
    },
    {
      id: 9,
      title: "Programming Essentials in Python",
      issuer: "Cisco",
      category: "other",
      color: "cyan-blue",
      icon: "🏗️",
      skills: ["Control Structures", "Functions and Modules", " Data Structures", "Exception Handling"],
      url: "/pdf/Programming Essentials in Python.pdf"
    },
    {
      id: 10,
      title: "Algorithms, Data Collection, and Starting to Code",
      issuer: "Coursera",
      category: "other",
      color: "cyan-blue",
      icon: "🏗️",
      skills: ["Control Flow and Logic", "Algorithms", "Debugging", "Error Handling"],
      url: "/pdf/Algorithms, Data Collection, and Starting to Code.pdf"
    },
    {
      id:11,
      title: "Build a Face Recognition Application Using Python",
      issuer: "Guvi",
      category: "other",
      color: "purple-pink",
      icon: "🤖",
      skills: ["Generative AI", "Prompt Engineer", "Azure OpenAI"],
      url: "/pdf/Build a Face Recognition Application Using Python.png"
    },
    {
      id:12,
      title: "Introduction to generative AI concepts",
      issuer: "Microsoft",
      category: "ai",
      color: "purple-pink",
      date:"2025",
      icon: "🤖",
      skills: ["Copilot Foundations", "Generative AI", "Prompt Engineer", "Azure OpenAI"],
      url: "https://learn.microsoft.com/api/achievements/share/en-us/SaiKrishnaReddyBollampally-8498/8ZQNE6FW?sharingId=816B51622DA4D55A"
    },
    {
      id:13,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      category: "cloud",
      color: "purple-pink",
      date:"2025",
      icon: "☁️",
      skills: ["Cloud Computing", "Amazon EC2", "Infrastructure automation", "Amazon SNS and Amazon SQS", "Elastic Load Balancing", " Amazon CloudFront", "DevOps Networking", "Amazon Storage", "AWS security services", "Monitoring AWS environment"],
      url: "/pdf/AWS Cloud Practitioner Essentials.pdf"
    },
    {
      id:14,
      title: "Docker Essentials: A Developer Introduction",
      issuer: "Cognitive Class",
      category: "cloud",
      color: "purple-pink",
      date:"2025",
      icon: "☁️",
      skills: ["Docker", "Containerization", "Microservices Architecture", "Docker Compose", "Docker Swarm"],
      url: "/pdf/Docker Essentials.pdf"
    },
    {
      id:15,
      title: "Create Your Own ChatGPT-like Website with Open Source LLMs",
      issuer: "Cognitive Class",
      category: "ai",
      color: "purple-pink",
      date:"2025",
      icon: "🤖",
      skills: ["OpenAI API", "Chatbot Development","LLM Integration"],
      url: "/pdf/Create Your Own ChatGPT-like Website with Open.pdf"
    },
    {
      id:16,
      title: "Get started building with Power BI",
      issuer: "Microsoft",
      category: "analysis",
      color: "purple-pink",
      date:"2025",
      icon: "📊",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "Data Analysis"],
      url: "/pdf/Get started building with Power BI.pdf"
    },
    {
      id:17,
      title: "Spring Boot Course: Certified Course for Essential Skills",
      issuer: "Scaler",
      category: "frontend",
      color: "purple-pink",
      date:"2025",
      icon: "⚛️",
      skills: ["Spring", "Spring Boot", "Spring MVC", "Spring Secutity"],
      url: "/pdf/SpringBoot.png"
    },
    {
      id:18,
      title: "AI for All From Basics to GenAI Practice",
      issuer: "NVIDIA",
      category: "ai",
      color: "purple-pink",
      date:"2025",
      icon: "🤖",
      skills: ["Generative AI", "Prompt Engineer", "Azure OpenAI"],
      url: "/pdf/AI for All From Basics to GenAI Practice.pdf"
    },
    {
      id:19,
      title: "Finetuning Large Language Models",
      issuer: "DeepLearning.AI",
      category: "ai",
      color: "purple-pink",
      date:"2025",
      icon: "🤖",
      skills: ["Deep Learning", "Fine Tuning", "Transformers", "Large Language Models"],
      url: "https://learn.deeplearning.ai/accomplishments/804d859c-fc43-46b0-a6f4-9e582ed724bc?usp=sharing"
    }


  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: '🏆' },
    { id: 'frontend', name: 'Web Development', icon: '⭐' },
    { id: 'ai', name: 'AI & ML', icon: '⚡' },
    { id: 'analysis', name: 'Data Analysis', icon: '📊' },
    { id: 'cloud', name: 'DevOps & Cloud', icon: '☁️' },
    // { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'other', name: 'Others', icon: '📈' },
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const totalCerts = certifications.length;
  const completedThisYear = certifications.filter(cert => cert.date === '2025').length;

  return (
    <section className='earnings'>
        <div className="earnings-container">
        
          {/* Animated Background Elements */}
          <div className="background-elements">
            <div className="bg-circle-1"></div>
            <div className="bg-circle-2"></div>
            <div className="bg-circle-3"></div>
          </div>
          <div className="main-content">
            {/* Header Section */}
            <div className="header-section">
              <div className="header-icon">🏆</div>
              <h1 className="main-title">Professional Achievements</h1>
              <p className="subtitle">
                A showcase of my professional achievements and continuous learning journey
              </p>
        
              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number purple">{totalCerts}</div>
                  <div className="stat-label">Total Certifications</div>
                </div>
                {/* <div className="stat-item">
                  <div className="stat-number cyan">{completedThisYear}</div>
                  <div className="stat-label">Earned in 2025</div>
                </div> */}
                <div className="stat-item">
                  <div className="stat-number green">6</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
            </div>
            {/* Category Filter */}
            <div className="filter-container">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-button ${selectedCategory === category.id ? 'active' : 'inactive'}`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            {/* Certifications Grid */}
            <div className="certifications-grid">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="cert-card"
                  style={{animationDelay: `${index * 150}ms`}}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Background Gradient */}
                  <div className={`cert-card-bg ${cert.color}`}></div>
        
                  {/* Floating Icon */}
                  <div className="cert-icon">
                    <span>{cert.icon}</span>
                  </div>
                  {/* Content */}
                  <div className="cert-content">
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                    {/* Date */}
                    <div className="cert-meta">
                      <div className="cert-date">
                        {/* <span>📅</span>
                        <span>{cert.date}</span> */}
                      </div>
                    </div>
                    {/* Skills Tags */}
                    <div className="skills-container">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {/* Credential ID */}
                    <div className="credential-id">
                      {cert.credentialId}
                    </div>
                    {/* Action Button */}
                    <a href={cert.url} target='_blank' rel="noreferrer">
                      <button className="view-cert-btn">
                      <span>View Certificate</span>
                      <span className="external-link-icon">🔗</span>
                    </button></a>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="footer-section">
              <div className="footer-badge">
                <span className="star-icon">⭐</span>
                <span>Continuously expanding my expertise</span>
                <span className="star-icon">⭐</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Earnings;