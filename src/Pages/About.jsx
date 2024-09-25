import { useState } from "react";
import Section from "../UI/Section";
import classes from "./About.module.css";


const About = () => 
{
  const sections = [
    {
      title: "Academic Exploration",
      content: "Throughout my academic journey, I have immersed myself in the intricacies of computer science, delving into various domains such as software development, algorithms, and data structures. This exploration has fostered a profound understanding of theoretical concepts, which I have seamlessly translated into practical applications. My curiosity drives me to continuously seek out new learning opportunities, whether through coursework, independent projects, or collaborative initiatives, ensuring that I stay at the forefront of emerging technologies and industry trends.",

    },
    {
      title: "Educational Achievements",
      content:"Graduating with a Bachelor of Science in Computer Science from Weber State University in April 2024 stands as a significant milestone in my educational path, showcasing my dedication and resilience. Achieving a GPA of 3.2 reflects my commitment to academic excellence, while my Associate Degree in Computer Systems and Information Systems from Salt Lake Community College further solidifies my foundational knowledge in the field with a 3.4 GPA. I have consistently strived for success, culminating in certifications in Software Development and Computer Science Fundamentals, underscoring my proactive approach to enhancing my skills and knowledge base.",
    },
    {
      title: "Technical Proficiency",
      content:"My technical proficiency encompasses a diverse array of programming languages and technologies, including JavaScript, Java, C, C#, and Python. I possess hands-on experience in developing full-stack applications, employing frameworks like React or PHP for frontend development and Django for backend services. My expertise extends to database management with PostgreSQL, Google Firebase, Microsoft SQL Server, MySQL, and MongoDB, where I design efficient schemas and implement robust data handling practices. In addition, I have honed my skills in collaborative environments, utilizing version control systems such as Git and GitHub to facilitate streamlined workflows and effective team collaboration.",
    },
    {
      title: "Aspirations and Problem-Solving Approach",
      content: "I aspire to leverage my technical skills to create innovative solutions that address real-world challenges in the software engineering landscape. My problem-solving approach is characterized by a blend of analytical thinking and creativity, allowing me to dissect complex issues and devise effective strategies for resolution. I thrive in dynamic environments where collaboration and communication are key, and I am passionate about fostering inclusive and effective team dynamics. As I move forward in my career, I aim to contribute to projects that not only advance technology but also make a positive impact on society.",
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
