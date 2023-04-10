import React from 'react'
import PImg from '../images/imgOne.jpeg'

function ProjectTop() {
  return (
    <>
        <h1 className='project-h1'>Here Are Some Projects</h1>
        <div className="project-section">
            <div className='project-box'>
                <div className='p-img'><img src={PImg} /></div>
                <div>
                    <h2>Working Desk</h2>
                    <p>Lorem, ipsum sit amet consectetur adipisicing elit. Deleniti facere eveniet nemo necessitatibus quo qui voluptatum architecto, nihil praesentium.</p>
                </div>
                <a href="">Read More</a>
            </div>
            <div className='project-box'>
                <div className='p-img'><img src={PImg} /></div>
                <div>
                    <h2>Working Desk</h2>
                    <p>Lorem, ipsum sit amet consectetur adipisicing elit. Deleniti facere eveniet nemo necessitatibus quo qui voluptatum architecto, nihil praesentium.</p>
                </div>
                <a href="">Read More</a>
            </div>
            <div className='project-box'>
                <div className='p-img'><img src={PImg} /></div>
                <div>
                    <h2>Working Desk</h2>
                    <p>Lorem, ipsum sit amet consectetur adipisicing elit. Deleniti facere eveniet nemo necessitatibus quo qui voluptatum architecto, nihil praesentium.</p>
                </div>
                <a href="">Read More</a>
            </div>
        </div>
    </>
  )
}

export default ProjectTop