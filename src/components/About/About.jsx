import React from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa'; 
import style from './About.module.css';

export default function About() {
  const skills = [
    " HTML5",
    "Semantic Elements ",
    "Custom Attributes",
    "CSS3",
    "Specificity",
    "CSS Flex",
    "CSS Grid",
    "Media Query",
    "CSS Variables",
    "CSS Nesting",
    "CSS Animations",
    "CSS Prefixes",
    "CSS Layers",
    "Fontawesome",
    "Web Accessibility",
    "Light house (Dev Tool)",
    "Bootstrap 5",
    "Tailwind 4",
    "JavaScript Basics",
    "Functional programming",
    "Hoisting",
    "CRUDS Operations",
    "Local Storage and Session Storage",
    "Regular Expression",
    "Ajax",
    "Async Programming",
    "Event Loop",
    "DOM",
    "BOM",
    "ES6",
    "OOP",
    "Typescript",
    "JQuery",
    "NPM",
    "JQuery Plugins",
    "Figma",
    "SASS",
    "Git",
    "React"
  ];

  return (
    <div className={`${style.about} d-flex flex-column align-items-center justify-content-center text-white py-5 text-center`}>

      <h1 className="text-uppercase fw-bold mb-4">About Me</h1>

      <div className="d-flex align-items-center mb-4">
        <div className={style.line}></div>
        <FaStar className="mx-3" />
        <div className={style.line}></div>
      </div>

      <p className="mb-5 px-3">
        خلال رحلتي في التعلم قدرت أتعلم وأطبق مجموعة كبيرة من المهارات والتقنيات 👇
      </p>

      <div className="container">
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3 text-start">
              <FaCheckCircle className="text-success me-2" />
              {skill}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
