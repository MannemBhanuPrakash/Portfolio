import React, { useEffect, useRef } from "react";
import hello from "../assets/images/hero1.png";
import MyResume from "../assets/files/MyResume.pdf";
import video from "../assets/videos/video.mp4";
import darkvideo from "../assets/videos/dark2.mp4";

import { useTheme } from "../ThemeContext";


function Home() {
  const { mode } = useTheme()
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const element = animatedTextRef.current;
    const texts = ["UI Development", "Software Development", "Web Development"];
    let textIndex = 0;

    function typeWriter(text, callback) {
      let i = 0;
      const interval = setInterval(() => {
        if (element) {
          element.textContent = text.slice(0, i);
        }
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTimeout(() => callback && callback(), 2000); // Wait 1 second before deleting
        }
      }, 100);
    }

    function deleteWriter(callback) {
      const currentText = element?.textContent || "";
      let i = currentText.length;
      const interval = setInterval(() => {
        if (element) {
          element.textContent = currentText.slice(0, i);
        }
        i--;
        if (i < 0) {
          clearInterval(interval);
          setTimeout(() => callback && callback(), 500); // Wait 0.5 seconds before typing new text
        }
      }, 50);
    }

    function startAnimation() {
      deleteWriter(() => {
        typeWriter(texts[textIndex], () => {
          textIndex = (textIndex + 1) % texts.length;
          startAnimation();
        });
      });
    }
    const timer = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <span id="home" style={{ paddingTop: 60 }}>
      <video loop autoPlay muted src={(mode === "light" ? video : darkvideo)} type="video/mp4" className="background-video" />
      <div className="container" >
        <div className="row featurette dcenter-div">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading annimateright">
              Hi, This is <span className="text-primary textcap">Mannem Bhanu Prakash</span>
            </h2>
            <h4 className="textcap annimateright">
              I'm Into
              <span className="text-background-wrapper ml-1">
                <div
                  id="animatedText"
                  ref={animatedTextRef}
                  className="custom-bg-warning custom-text-padding custom-rounded custom-text-white custom-text-lg custom-font-bold custom-cursor"
                >
                  Web development
                </div>
              </span>
            </h4>

            <p className="lead annimaterighttwo">
              Resourceful Web Developer with expertise in React.js, TypeScript, Tailwind CSS, JavaScript, HTML, and CSS,
              adept at leveraging the latest technology trends to deliver clean, high-performing website designs.
              Skilled in managing complex coding, design, and extensions to meet organizational and user-focused web
              application needs. Known for detail-oriented collaboration to define and meet project expectations
              effectively. Excels in hands-on testing, debugging, and optimization to ensure consistency, scalability,
              and high performance.
            </p>
            <a href={MyResume} download="BhanuPrakashresume.pdf">
              <div className="resume annimaterightthree mt-4">
                <div>Resume</div>
              </div>
            </a>

          </div>
          <div className="col-md-5 order-md-1 annimateleft">
            <img
              className="featurette-image img-fluid rounded-circle zoom-out-on-hover"
              alt="500x500"
              src={hello}
            />
          </div>

        </div>
      </div>
    </span>
  );
}

export default Home;
