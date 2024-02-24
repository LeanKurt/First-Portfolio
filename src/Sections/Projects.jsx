
import { myProjects, logo } from "../Constants"
import '../projects.css';

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-container">
        {myProjects.map((project) => (
          <div className="card-container">
            <div className="projects-image">
              <img src={project.src} alt="my projects" className="img-inside"/>
            </div>
            <div className="projects-title">
              <p>{project.title}</p>
            </div>
            <div className="description">
              <p>{project.description}</p>
            </div>
            <div className="github">
            {logo.map((logos) => (
              <img src={logos.src} alt="github"  className="github-logo"width={24} height={24}/>
            ))}
           </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects