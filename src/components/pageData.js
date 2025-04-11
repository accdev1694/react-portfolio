import { Link } from "react-router-dom";

// passport
import myPhoto from "../assets/images/my-photo.png";

// skills pictures
import firebaseLogo from "../assets/images/skills/firebase.png";
import pythonLogo from "../assets/images/skills/python.png";
import reactLogo from "../assets/images/skills/react.png";
import tailwindLogo from "../assets/images/skills/tailwind.png";

// projects pictures
import blog from "../assets/images/projects/blog.png";
import landingPage from "../assets/images/projects/landing-page.png";
import ecommerce from "../assets/images/projects/ecommerce.png";
import portfolio from "../assets/images/projects/portfolio.png";

// contacts pictures
import github from "../assets/images/contact/github.png";
import hashnode from "../assets/images/contact/hashnode.png";
import linkedin from "../assets/images/contact/linkedin.png";
import mail from "../assets/images/contact/mail.png";

// not found page picture
const notFound =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG1kaXQxODI3YnVkaWIwcXJ6ZGYzNzM0azN0bXg4amZzMzliZ3ZpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WQOIEQRgiK722l3PQT/giphy.gif";

  // contacts urls
  const githubUrl = "https://github.com/accdev1694?tab=repositories"
  const linkedinUrl = "https://www.linkedin.com/in/ao111/"
  const hashnodeUrl = "https://abojeonline.com/"
  const mailUrl = "mailto:diloch111@gmail.com"

  // projects Urls
  const blogUrl = "https://abojeonline.com/"
  const ecommerceUrl = "" 
  const landingPageUrl = "" 
  const portfolioUrl = ""

export const pageData = {
  home: {
    heading: "Oloche Aboje",
    subHeading: "FRONT END DEVELOPER",
    description:
      "I started out in architecture, drawn to design and structure — but when I discovered web development, everything clicked. Coding quickly became more than a skill; it became the space where I feel most focused, creative, and at home. I can’t imagine doing anything else, and that passion drives everything I build.",
    learnMore: ">>> Checkout My Skills",
    id: "home",
    imgs: [myPhoto],
    alt: ["My Photo"]
  },

  skills: {
    heading: "My Skills",
    subHeading: "Tailwind | React | FireBase | Python",
    description:
      "I began my front-end journey with a bootcamp with the University of Birmingham, where I built a strong base in HTML, CSS, JavaScript, and React. That experience sparked my hunger to go deeper, leading me to take the Harvard’s CS50 Python course. Since then, I’ve kept sharpening my front-end skills — focused on writing clean code, building intuitive UIs, and creating real value through great user experiences.",
    learnMore: ">>> Checkout My Projects",
    id: "skills",
    imgs: [tailwindLogo, reactLogo, firebaseLogo, pythonLogo],
    alt: ["Tailwind Css Logo", "React Logo", "Firebase Logo", "Python Logo"]
  },

  projects: {
    heading: "My Projects",
    subHeading: "Blog | Landing Page | Ecommerce Site | Portfolio",
    description:
      "Here’s a selection of projects that reflect my growth as a developer. From building my portfolio to share my work, to writing and teaching on my blog, I’ve used each project to push my skills further. I’ve also built a landing page for a tech training platform, and I’m currently working on an e-commerce site for African food products — a project that blends function, culture, and commerce.",
    learnMore: ">>> Contact Me",
    id: "projects",
    imgs: [blog, ecommerce, landingPage, portfolio],
    urls: [blogUrl, ecommerceUrl, landingPageUrl, portfolioUrl],
    alt: ["My Blog Preview", "My Ecommerce Site Preview", "Tech Training Landing Page Preview", "My Portfolio Website Preview"]
  },
  contacts: {
    heading: "Contact Me",
    subHeading: "GitHub | HashNode | LinkedIn | Mail",
    description:
      "If you’d like to connect, collaborate, or just say hello — I’m always open to conversations. You can find me on GitHub to see what I’m building, read my writing on Hashnode, connect professionally on LinkedIn, or reach out directly via email.",
    learnMore: "<<< Return to Homepage",
    id: "contacts",
    imgs: [github, hashnode, linkedin, mail],
    urls: [githubUrl, hashnodeUrl, linkedinUrl, mailUrl],
    alt: ["GitHub Logo", "Hashnode Logo", "LinkedIn Logo", "Gmail Logo"]
  },

  notFound: {
    heading: "Sorry!",
    subHeading: "Page not Found !!!",
    description:
      "Looks like you’ve wandered off the main path — this page doesn’t exist or might have been moved. Let’s get you back on track.",
    learnMore: "<<< Return to Homepage",
    id: "not-found",
    imgs: [notFound],
    alt: ["404 Page not Found"]
  },
};
