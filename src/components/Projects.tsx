import React from 'react'
import '../stylesheets/projects.css';




export const Projects = () => {
  return (
    <>
      <div className="image-container">
        {/* {utilizo de esta manera para poder usar imagenes, de las que pasare parte del string mediante props} */}
        <div className='image' style={{ backgroundImage: 'url(/img/portfolio-img.jpeg)'}}></div>
      </div>    
    </>
  )
}
