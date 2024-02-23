
import { myProjects } from "../Constants"

const Projects = () => {
  return (
    <section>
      <div className="main-container">
        {myProjects.map((project) => (
          <div className="image-container">
            <img src={project.src}
              alt="my projects"
              className="img-inside"
            />
            <div className="project-title">
              <p>{project.title}</p>
            </div>
            <div className="description">
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects