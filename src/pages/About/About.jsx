/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a self-driven full-Stack Developer with expertise in technologies like MVC,
          Node.js, React.js, and Git. I have a proven track record of efficiently delivering
          successful web development projects. I look forward to applying my knowledge and
          skills to drive tangible results in a challenging work environment.
        </p>

        <p>
          A full stack developer with experience for over a year with knowledge of
          the fundamentals of Python, C, C++, PHP, proficient with DSA as well as
          Frontend (HTML, CSS, Bootstrap, Javascript, Ajax, jQuery, and ReactJs) and
          Backend (NodeJs, ExpressJs and Laravel) technologies, well‐versed in
          database management systems including MySQL, MongoDb, and Firebase
          having the aptitude and drive to swiftly learn and use new technologies
          and possessing strong problem‐solving abilities.
        </p>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              degree={testimonial.degree}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - clients
    --> */}

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  )
}

export default About