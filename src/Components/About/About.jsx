import React from 'react'
import './About.css'
import theme_pattern from'../../assets/download.svg'
import profile_img from '../../assets/Thurshani1.PNG'

function About() {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
      <h1>About me</h1>
      <img src={theme_pattern} alt=""/>
      </div>

      <div className='about-sections'>
       <div className='about-left'>
       <img src={profile_img} alt=""/>
       </div> 

        <div className='about-right'>
        <div className='about-para'>
          <p>
            I’m Thurshani Nagalingam, an enthusiastic and dedicated undergraduate studying Information Technology and Management at the University of Moratuwa.
             With a passion for software development and a love for solving complex problems, I am driven to learn, grow, and create solutions that make a meaningful impact.
             I value creativity, collaboration, and continuous learning, and I am always eager to take on new challenges, work with diverse teams, and contribute to projects 
            that make a difference.
          </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>React JS</p><hr style={{width:"100%"}}/></div>
            <div className='about-skill'><p>Angular</p><hr style={{width:"90%"}}/></div>
            <div className='about-skill'><p>Node Js</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>Larevel</p><hr style={{width:"70%"}}/></div>
           </div> 
          </div>
          </div>
    <div className="about-achievements">
  <div className="about-achievement">
    <h1>6 Months</h1>
    <p>SOFTWARE ENGINEER INTERNSHIP</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>5+</h1>
    <p>PROJECTS COMPLETED</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>3+</h1>
    <p>TECHNOLOGIES LEARNED<br /></p>
  </div>
</div>


        </div>
       
  
  )
}

export default About