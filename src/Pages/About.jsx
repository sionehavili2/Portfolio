import { useState } from "react";
import Section from "../UI/Section";
import classes from "./About.module.css";


const About = () => 
{
  const sections = [
    {
      title: "Academic Exploration",
      content:
        "In my academic journey, I've taken a variety of courses, ranging from Advanced Database Programming to Game Development with Unity and MERN Web Development. These courses have not only improved my technical skills but also deepened my understanding of the theoretical principles essential for effective software design.",
    },
    {
      title: "Educational Achievements",
      content:
        "In addition to pursuing my Bachelor's degree, I've earned an Associate of Applied Science in Computer Science from Weber State University and an Associate of Science In Computer Science And Information Systems from Salt Lake Community College. These academic milestones, coupled with certifications in Software Development and Computer Science Fundamentals, underscore my commitment to continuous learning.",
    },
    {
      title: "Technical Proficiency",
      content:
        "My proficiency extends beyond languages and frameworks to include Microsoft Excel, SQL, MongoDB, and Firebase. I am adept at employing Object-Oriented Programming (OOP) principles to build scalable and efficient applications. Whether it's diving into the intricacies of MIPS Assembly or crafting dynamic user interfaces with React JS, I thrive on the challenge of turning concepts into tangible, functional solutions.",
    },
    {
      title: "Aspirations and Problem-Solving Approach",
      content:
        "Looking ahead, my focus is on contributing to the dynamic field of computer science, with a keen interest in web development and software engineering. I am not merely a coder; I approach challenges as opportunities for creative problem-solving. My goal is to bridge the gap between technology and user experience, delivering solutions that are not just functional but also intuitive and user-friendly.",
    },
  ];

  const developerParagraph =
    "Explore the various sections to get to know the person behind the code. From academic pursuits to hands-on projects, each segment offers a snapshot of my journey. Whether you're curious about educational background or exploring collaboration opportunities, each part contributes to the overall narrative. Your curiosity is the key to uncovering the full story!";

  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const isOpen = prevOpenSections.includes(index);
      return isOpen
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index];
    });
  };

  const toggleAllSections = () => {
    setOpenSections((prevOpenSections) => {
      return prevOpenSections.length === sections.length ? [] : Array.from({ length: sections.length }, (_, i) => i);
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <h2>About The Developer</h2>
        <div className={classes.developerParagraph}>{developerParagraph}</div>
        <button className={classes.button} onClick={toggleAllSections}>
          {openSections.length === sections.length
            ? "Collapse All Sections"
            : "Expand All Sections"}
        </button>
      </div>

      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openSections.includes(index)}
          toggleSection={() => toggleSection(index)}
        />
      ))}
    </div>
  );
  // return <div>About div</div>;
};

export default About;
