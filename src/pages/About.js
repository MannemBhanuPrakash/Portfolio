
import React, { useEffect } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" id='about' >
      <div className="row justify-content-center text-center" style={{ paddingTop: 60 }}  >
        <div className="col-md-8">
          <h1 className="display-4 fw-bold" data-aos="fade-down">Bhanu Prakash Mannem</h1>
          <p className="lead text-muted" data-aos="fade-up">
            React.js Developer with 3+ years of experience in building dynamic, interactive, and user-friendly web applications.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-right">
          <h3 className="fw-bold">Summary</h3>
          <>
            Expertise in creating single-page applications (SPAs) using React.js, TypeScript, and modern front-end technologies like
            Bootstrap and Tailwind CSS. Proficient in working with version control systems like Git and collaborating with cross-functional teams.
          </>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3 className="fw-bold">Highlights</h3>
          <ul>
            <li>Proficient in React.js, Redux, TypeScript, HTML5, CSS3, and JavaScript/ES6.</li>
            <li>Experience with tools like Visual Studio, Figma, and GitHub.</li>
            <li>Skilled in responsive design and optimizing UI performance.</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-up">
          <h3 className="fw-bold">Professional Experience</h3>
          <p><strong>Junior Programmer</strong> at Olive Technologies PVT Ltd (May 2023 - Present)
            <a href="https://www.olivetech.com" target="_blank" rel="noopener noreferrer" className='text-primary'>(www.olivetech.com)</a></p>


          <p><strong>Software Engineer</strong> at SpanIdea Systems PVT Ltd (Oct 2021 - Dec 2023)
            <a href="https://www.spanidea.com" target="_blank" rel="noopener noreferrer" className='text-primary'>(www.spanidea.com)</a></p>
          <p></p>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <h3 className="fw-bold">Education</h3>
          <p>Bachelor of Technology, Gudlavalleru Engineering College, Affiliated to JNTUK</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12" >
          <h3 className="fw-bold" data-aos="zoom-in">Projects</h3>
          <div className="card mb-3" data-aos="zoom-in">
            <div className="card-body" style={{ color: '#000' }}>
              <h4 className="card-title">Storage Auctions</h4>
              <p className="card-text">
                Developed an online marketplace for storage auctions using React.js and TypeScript, enabling real-time bidding and seamless
                user engagement.
              </p>
              <p><strong>Technologies Used:</strong> React.js, TypeScript, Redux, HTML5, CSS3, Mui, Tailwind CSS</p>
              <p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Implemented real-time bidding features to enhance user engagement.</li>
                <li>Optimized UI components for performance and responsiveness.</li>
                <li>Collaborated with backend teams to ensure seamless data flow.</li>
                <li>Tested and debugged UI components to ensure a smooth user experience.</li>
              </ul>
            </div>
          </div>
          <div className="card mb-3" data-aos="zoom-in">
            <div className="card-body" style={{ color: '#000' }}>
              <h4 className="card-title">HRMS</h4>
              <p className="card-text">
                Streamlined HR onboarding processes by developing a portal with React.js, featuring automated form population and PDF generation.
              </p>
              <p><strong>Technologies Used:</strong> React.js, Redux, HTML5, CSS3, JavaScript, Bootstrap</p>
              <p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Designed and implemented a user-friendly onboarding interface.</li>
                <li>Automated data entry across multiple HR forms using Redux.</li>
                <li>Developed functionality for PDF generation with accurate formatting.</li>
                <li>Worked with HR teams to gather requirements and provide training.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 text-center" data-aos="fade-up">
          <h3 className="fw-bold">Connect with Me</h3>
          <a href="mailto:bhanuprakashmannem20@gmail.com" className="btn btn-primary m-2" title='E-Mail' target="_blank" rel="noopener noreferrer"><MdEmail size={25} />          </a>
          <a href="tel:+918184959300" className="btn btn-primary m-2 " title='Mobile' ><MdPhone size={25} /></a>
          <a href="https://www.linkedin.com/in/mannembhanuprakash" title='LinkedIn' className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25} />          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
