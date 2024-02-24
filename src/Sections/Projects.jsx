
import { myProjects } from "../Constants"
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects