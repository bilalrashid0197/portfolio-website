'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">BR</div>
            <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active": ""}>
              <li>
                  <a href="#">Home</a>
              </li>
              <li>
                  <a href="#skills">Skills</a>
              </li>
              <li>
                  <a href="#work-experience">Work Experience</a>
              </li>
              <li>
                  <a href="#projects">Projects</a>
              </li>
              <li>
                  <a href="mailto:rash8510@mylaurier.ca" className="button">Contact Me</a>
              </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
            </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
            <div className="hero-blue">
              <div>
                  <h1><small>Hi I'm</small>
                    Bilal Rashid
                  </h1>
                  <p>Design and Developer in Canada who creates website using HTML, CSS, and JavScript.<span>I'm interested in AI topics which why I also added thing like ChatGPT into my projects these day.</span></p>
                  <div className="call-to-action">
                    <a href="./Bilal_Rashid_Resume.pdf" className="button black">View Resume</a>
                    <a href="mailto:rash8510@mylaurier.ca" className="button white">Contact Me</a>
                  </div>
                  <div className="social-links">
                    <a href="#">
                    <img src="./imgs/github.png" alt="GitHub" width="48px" />
                    </a>
                    <a href="#">
                    <img src="/imgs/linkedin.png" alt="LinkedIn" width="48px" />
                    </a>
                  </div>
              </div>
            </div>
            <div className="hero-yellow">
              <img src="/imgs/BilalHeadshot.png" alt="Bilal Rashid" width="100%"/>
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
              <div className="track">
                  <img src="/imgs/typescript.png" alt="TypeScript" width="128px" />
                  <img src="/imgs/html.png" alt="HTML" width="128px" />
                  <img src="/imgs/css.png" alt="CSS" width="128px" />
                  <img src="/imgs/javascript.png" alt="JavaScript" width="128px" />
                  <img src="/imgs/nextjs.png" alt="NextJS" width="128px" />
                  <img src="/imgs/vscode.png" alt="Visual Studio Code" width="128px" />
                  <img src="/imgs/mongodb.png" alt="MongoDB" width="128px" />
                  <img src="/imgs/express.png" alt="Express JS" width="128px" />
                  <img src="/imgs/react.png" alt="React" width="128px" />
                  <img src="/imgs/nodejs.png" alt="Node JS" width="128px" />
                  <img src="/imgs/tailwindcss.png" alt="Taildwins CSS" width="128px" />
                  <img src="/imgs/prisma.png" alt="Prisma" width="128px" />
                  <img src="/imgs/NumPy.png" alt="NumPy" width="128px" />
                  <img src="/imgs/Pandas.png" alt="Pandas" width="128px" />
                  <img src="/imgs/Matplotlib.png" alt="Matplotlib" width="128px" />
                  <img src="/imgs/Git.png" alt="Git" width="128px" />
                  <img src="/imgs/AWSRDS.png" alt="AWS RDS" width="128px" />
                  <img src="/imgs/Figma.png" alt="Figma" width="128px" />
                  <img src="/imgs/MySQL.png" alt="MySQL" width="128px" />
                  <img src="/imgs/Heroku.png" alt="Heroku" width="128px" />
                  <img src="/imgs/github.png" alt="GitHub" width="128px" />
                  <img src="/imgs/typescript.png" alt="TypeScript" width="128px" />
                  <img src="/imgs/html.png" alt="HTML" width="128px" />
                  <img src="/imgs/css.png" alt="CSS" width="128px" />
                  <img src="/imgs/javascript.png" alt="JavaScript" width="128px" />
                  <img src="/imgs/nextjs.png" alt="NextJS" width="128px" />
                  <img src="/imgs/vscode.png" alt="Visual Studio Code" width="128px" />
                  <img src="/imgs/mongodb.png" alt="MongoDB" width="128px" />
                  <img src="/imgs/express.png" alt="Express JS" width="128px" />
                  <img src="/imgs/react.png" alt="React" width="128px" />
                  <img src="/imgs/nodejs.png" alt="Node JS" width="128px" />
                  <img src="/imgs/tailwindcss.png" alt="Taildwins CSS" width="128px" />
                  <img src="/imgs/prisma.png" alt="Prisma" width="128px" />
                  <img src="/imgs/NumPy.png" alt="NumPy" width="128px" />
                  <img src="/imgs/Pandas.png" alt="Pandas" width="128px" />
                  <img src="/imgs/Matplotlib.png" alt="Matplotlib" width="128px" />
                  <img src="/imgs/Git.png" alt="Git" width="128px" />
                  <img src="/imgs/AWSRDS.png" alt="AWS RDS" width="128px" />
                  <img src="/imgs/Figma.png" alt="Figma" width="128px" />
                  <img src="/imgs/MySQL.png" alt="MySQL" width="128px" />
                  <img src="/imgs/Heroku.png" alt="Heroku" width="128px" />
                  <img src="/imgs/github.png" alt="GitHub" width="128px" />
              </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
              <small>About Me</small>
              Skills
            </h2>
            <div className="holder-blue">
              <div className="left-column">
                  <h3>Frontend</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <h3>Backend</h3>
                  <ul>
                    <li>Express</li>
                  </ul>
              </div>
              <div className="right-column">
                  <h3>A bit about me</h3>
                  <p>Hi I'm Bilal</p>
                  <p>My name is bilal</p>
              </div>
            </div>
        </section>
        <section id="work-experience" className="work-experience container">
            <h2>
              <small>Recent</small>
              Work Experience
            </h2>
            <div className="jobs">
              <article>
                  <figure>
                    <div>
                        <img src="/imgs/MLSE.png"  alt="" width="100%"/>
                        <figcaption>
                          Workplace - 1
                        </figcaption>
                    </div>
                  </figure>
                  <h3>MLSE</h3>
                  <div>2023</div>
                  <p>Info about job</p>
              </article>
              <article>
                  <figure>
                    <div>
                        <img src="/imgs/WLU.png"  alt="" width="100%"/>
                        <figcaption>
                          Workplace - 2
                        </figcaption>
                    </div>
                  </figure>
                  <h3>MLSE</h3>
                  <div>2023</div>
                  <p>Info about job</p>
              </article>
              <article>
                  <figure>
                    <div>
                        <img src="/imgs/Simplii.png"  alt="" width="100%"/>
                        <figcaption>
                          Workplace - 3
                        </figcaption>
                    </div>
                  </figure>
                  <h3>MLSE</h3>
                  <div>2023</div>
                  <p>Info about job</p>
              </article>
            </div>
        </section>
        <section id="projects" className="bento container">
            <h2>
              <small>Recent</small>
              Personal Projects
            </h2>
            <div className="bento-grid">
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
              <div className="bento-item">
                  <a href="#" className="bento-item">
                  <img src="" alt="" width="100%" />
                  </a>
              </div>
            </div>
        </section>
        <section className="chatbot container">
            <h2>
              <small>
              Talk to me
              </small>
              Chatbot
            </h2>
            <div className="chatbot-blue">
              <div className="chat-info">
                  <h3>Azure AI Chatbot</h3>
                  <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
                  <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
                  <a href="./Bilal_Rashid_Resume.pdf" className="button black">Download Resume</a>
              </div>
              <div className="chat-box">
                  <div className="scroll-area">
                    <ul id="chat-log">
                        <li>
                          <span className="avatar bot">AI</span>
                          <div className="message">
                              Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
                          </div>
                        </li>
                        <li>
                          <span className="avatar user">User</span>
                          <div className="message">
                              I have a question to ask you about this resume
                          </div>
                        </li>
                    </ul>
                  </div>
                  <div className="chat-message">
                    <input type="text" placeholder="Hey Adrian, what skills are you best at?" />
                    <button className="button black">Send</button>
                  </div>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
