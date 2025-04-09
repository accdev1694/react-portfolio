import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";

function App() {
  
  const [leftHero, setLeftHero] = useState([
    {
      home: {
        heading: "Oloche Aboje",
        subHeading: "FRONT END DEVELOPER",
        description:
          "I started out in architecture, drawn to design and structure — but when I discovered web development, everything clicked. Coding quickly became more than a skill; it became the space where I feel most focused, creative, and at home. I can’t imagine doing anything else, and that passion drives everything I build.",
        learnMore: ">>> Checkout My Skills",
        id: "home",
      },
    },
    {
      skills: {
        heading: "My Skills",
        subHeading: "Tailwind CSS | React | FireBase | Python",
        description:
          "I began my front-end journey through with bootcamp with the University of Birmingham, where I built a strong base in HTML, CSS, JavaScript, and React. That experience sparked my hunger to go deeper, leading me to take the Harvard’s CS50 Python course. Since then, I’ve kept sharpening my front-end skills — focused on writing clean code, building intuitive UIs, and creating real value through great user experiences.",
        learnMore: ">>> Checkout My Projects",
        id: "skills",
      },
    },
    {
      projects: {
        heading: "My Projects",
        subHeading: "Blog | Landing Page | Ecommerce Site | Portfolio",
        description:
          "Here’s a selection of projects that reflect my growth as a developer. From building my portfolio to share my work, to writing and teaching on my blog, I’ve used each project to push my skills further. I’ve also built a landing page for a tech training platform, and I’m currently working on an e-commerce site for African food products — a project that blends function, culture, and commerce.",
        learnMore: ">>> Contact Me",
        id: "projects",
      },
    },
    {
      contact: {
        heading: "Contact Me",
        subHeading: "GitHub | HashNode | LinkedIn | Mail",
        description:
          "If you’d like to connect, collaborate, or just say hello — I’m always open to conversations. You can find me on GitHub to see what I’m building, read my writing on Hashnode, connect professionally on LinkedIn, or reach out directly via email.",
        learnMore: "<<< Return to Homepage",
        id: "contact",
      },
    },
    {
      notFound: {
        heading: "Sorry!",
        subHeading: "Page not Found",
        description:
          "Looks like you’ve wandered off the main path — this page doesn’t exist or might have been moved. Let’s get you back on track.",
        learnMore: "<<< Return to Homepage",
        id: "not-found",
      },
    },
  ]);

  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage leftHero={leftHero} />} />
          <Route
            path="/my-skills"
            element={<MySkills leftHero={leftHero} />}
          />
          <Route
            path="/my-projects"
            element={<MyProjects leftHero={leftHero} />}
          />
          <Route
            path="/contact-me"
            element={<ContactMe leftHero={leftHero} />}
          />
          <Route
            path="*"
            element={<PageNotFound leftHero={leftHero} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
