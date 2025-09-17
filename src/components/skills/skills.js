import "./skills.css";

const skills2 = [
{
    title: "React, C"
},
];



const skills1 = [
{
    title: "Languages",
    description: <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                </ul>
},

{
    title: "Analysis/Visualization",
    description: <ul>
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>Plotly</li>
                        <li>SciPy</li>
                        <li>Tableau</li>
                        <li>Power BI</li>
                </ul>
},

{
    title: "Machine Learning",
    description:<ul>
                        <li>Scikit-learn</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>Keras</li>
                </ul>
},

{
    title: "DevOps/Cloud",
    description:<ul>
                        <li>Docker</li>
                        <li>Git</li>
                        <li>CI/CD</li>
                        <li>Google Cloud Platform</li>
                        <li>Azure Cloud</li>
                        <li>Amazon Web Services</li>
                </ul>
},


{
    title: "Database",
    description: <ul>
                        <li>MangoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                </ul>
},

{
    title: "Tools/Platforms",
    description:<ul>
                        <li>Jupyter Notebook</li>
                        <li>VS Code</li>
                        <li>Google Colab</li>
                        <li>Amazon SageMaker</li>
                        <li>PyCharm</li>
                        <li>GitHub</li>
                        <li>DockerHub</li>
                        <li>Jira</li>
                </ul>
},

{
    title: "Version Control",
    description:<ul>
                        <li>Git</li>
                        <li>GitHub</li>
                </ul>
},
];




function Skills(){
    return (
    <section id="skills">
        <div className="skill-container">
            <h1 className="skills-title"> SKILLS</h1>
            <div className="skills-grid">
                <h1 className="grid-title">Data Science</h1>
                {skills1.map((skills1, index) => (
                <div key={index} className="skills-card">
                    <h2>{skills1.title}</h2>
                    <p>{skills1.description}</p>
                </div>
                ))}
            </div>

            <div className="skills-grid">
                <h1 className="grid-title">Other Skills</h1>
                {skills2.map((skills2, index) => (
                <div key={index} className="skills-card">
                    <h2>{skills2.title}</h2>
                    <p>{skills2.description}</p>
                </div>
                ))}
            </div>

        </div>
    </section>
    );
};

export default Skills;
