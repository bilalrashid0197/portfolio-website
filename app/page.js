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
            <div className="logo-text">Bilal's Portfolio</div>
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
                  <p>Specializing in crafting robust and engaging websites, I am a Full-Stack Developer from Canada with a command over HTML, CSS, JavaScript, and the MERN stack.<span> Explore my portfolio to see how I transform ideas into fully realized web experiences.</span></p>
                  <div className="call-to-action">
                    <a href="./Bilal_Rashid_Resume.pdf" className="button black">View Resume</a>
                    <a href="mailto:rash8510@mylaurier.ca" className="button white">Contact Me</a>
                  </div>
                  <div className="social-links">
                    <a href="https://github.com/bilalrashid0197">
                    <img src="./imgs/github.png" alt="GitHub" width="48px" />
                    </a>
                    <a href="https://www.linkedin.com/in/bilal-rashid-a04625198/">
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
                  <img src="/imgs/python.png" alt="Python" width="128px" />
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
                  <img src="/imgs/python.png" alt="Python" width="128px" />
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
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NextJS</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                  <h3>Backend</h3>
                  <ul>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>Node JS</li>
                    <li>Prisma</li>
                    <li>AWS RDS</li>
                    <li>MySQL</li>
                    <li>Python</li>
                  </ul>
              </div>
              <div className="right-column">
                  <h3>A bit about me</h3>
                  <p>
                    Hello! I’m Bilal, a computer science student with a passion for web development. I delve into coding with the aim of innovating and simplifying the user experience 🌐. My ultimate goal is to provide clean, responsive design and purposeful functionality in every project I tackle.</p>
                  <p>
                  Away from the keyboard, I engage in diverse activities such as reading compelling literature 📖, hiking through trails 🌲, and playing basketball 🏀. These activities not only rejuvenate my creativity but also enhance my professional approach to software development.
                  </p>
                  <p>Thank you for exploring my portfolio. If you're interested in innovative, user-centric web solutions, let’s connect and discuss how we can collaborate!</p>
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
                        <img src="/imgs/mlse.jpeg"  alt="MLSE" width="100%" height="100%"/>
                        <figcaption>
                          MLSE (Maple Leaf Sports & Entertainment)
                        </figcaption>
                    </div>
                  </figure>
                  <h3>Digital Operations Analyst (Internship)</h3>
                  <div>Jan 2024 - Apr 2024</div>
                  <p>Drove digital engagement for MLSE, creating interactive campaigns that netted 6,000+ sign-ups. Spearheaded analytics dashboards, enhancing decision-making and streamlining performance reporting.</p>
              </article>
              <article>
                  <figure>
                    <div>
                        <img src="https://getvectorlogo.com/wp-content/uploads/2023/05/wilfrid-laurier-university-vector-logo.png"  alt="Wilfrid Laurier University" width="100%" height="90%" />
                        <figcaption>
                         Wilfrid Laurier University
                        </figcaption>
                    </div>
                  </figure>
                  <h3>Science Communication Writer</h3>
                  <div>Oct 2023 - Apr 2024</div>
                  <p>Utilized HTML and CSS to craft and execute a strategic science communication plan, producing engaging and accessible content that significantly enhanced reader interaction and digital presence.</p>
              </article>
              <article>
                  <figure>
                    <div>
                        <img src="/imgs/Simplii.png"  alt="Simplii Financial" width="100%" height="100%"/>
                        <figcaption>
                          Simplii Financial (CIBC)
                        </figcaption>
                    </div>
                  </figure>
                  <h3>Product Owner (Internship)</h3>
                  <div>Aug 2022 - Apr 2023</div>
                  <p>Led the development of Simplii's first market-facing virtual assistant, spearheading automation efforts that resulted in a 9% reduction in call volume and enhanced service efficiency.</p>
              </article>
            </div>
        </section>
        <section id="projects" class="bento container">
          <h2>
            <small>
              Portfolio
            </small>
            Projects
          </h2>
          <div class="bento-grid">
            <a href="https://github.com/bilalrashid0197/HackTheNorth-CiteMe" class="bento-item">
              <img src="./imgs/citeme.png" alt="Cite Me" width="100%" height="100%" />
            </a>
            <a href="https://thedailyblog-cef4de6cc286.herokuapp.com/" class="bento-item">
              <img src="./imgs/thedailyblog.png" alt="The Digital Blog" width="100%" height="100%"/>
            </a>
            <a href="https://stock-peer-960d0769310e.herokuapp.com/" class="bento-item">
              <img src="./imgs/stockpeer.png" alt="Stock Peer" width="100%" height="100%" />
            </a>
          </div>
		    </section>
        {/*<section className="chatbot container">
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
          </section>*/}
      </main>
    </>
  );
}
