
import { myProjects, logo } from "../Constants"

import '../projects.css';

const Projects = ({theme}) => {
  const logoSrc = theme === "light" ? logo[0].src2 : logo[0].src;
  return (
    <section className="projects-page">
      <div className="heading-projects">
       <h1 className="gradient">Featured Projects:</h1>
       </div>
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
              <img src={logoSrc} alt="github"  className="github-logo"width={24} height={24}/>
           </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects