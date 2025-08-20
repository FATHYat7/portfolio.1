import React from 'react'

import logo from '../../assets/weather.png'
import photo from'../../assets/daniels.png'
import meal from'../../assets/mealfy.png'


export default function Portfolio() {
  const projects = [
    {
      title: "Practical Project",
       image: photo,

      description: "مشروع عملي باستخدام Bootstrap",
      link: "https://daniels-project-lov3.vercel.app/"
    },
    {
      title: "Weather App",
      image: logo,
      description: "ت باستخدام JavaScript",
      link: "https://weather-project-pearl.vercel.app/"
    },
    {
      title: "Portfolio Website",
      image: meal,
      description: "موقع بورتفوليو شخصي باستخدام CSS, HTML, JS",
      link: "https://mealfy-project-inct.vercel.app/"
    }
  ];

  return (
    <>
      <div className="container py-5">
        <h2 className="text-center text-uppercase fw-bold mb-4">Portfolio</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card h-100 shadow border-0">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary mt-auto"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
