import { myProfile } from '../Constants';
import { mySkills } from '../Constants';
import '../Ls.css';

const LandingSection = ({theme}) => {
  return (
    <section className='landing-page'>
      <div className='heading-container'>
           <div className='my-title'>
             <h1>Hi I am Lean,</h1>
             <h1 className='gradient'>a Web Developer</h1>
           </div>
           <div className='description'>
             <p>a passionate and experienced web developer dedicated to crafting exceptional digital experiences.
              </p>
           </div>
           <div className='skill-container'>
            {mySkills.map((skill,index) => (
             <div className='icon-container'>
               <img src={skill.src} key={index} className='myIcon'/>
             </div>
            ))}
            </div>  
        </div>
        {myProfile.map((image) => (
           <div className={theme === "light" ? "image-containerdark" : "image-container"}>
          <img src={image.src}
          alt='my profile'  className='myImage'width={260} height={250}/>
          </div>
        ))}
      
    </section>
  )
}

export default LandingSection