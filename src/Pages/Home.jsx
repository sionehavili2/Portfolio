import { Link, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import React from 'react';
import PdfViewer from '../UI/pdfViewer.jsx';
import Section from "../UI/Section";

const Home = () => {

  const navigate = useNavigate();

  // const handleDataPost = async () => 
  // {
  //   const projects = [
  //     {
  //       title: "Roll-A-Ball Enhanced",
  //       description:
  //         "Step into an immersive gaming experience with my Unity project—a lively and visually engaging game that invites you to roll your player through an interactive playground. The mission is crystal clear: navigate through the vibrant landscape and strategically collect all the yellow power-ups strewn across the terrain. The twist lies in the color—these power-ups are only up for grabs when they radiate a lively shade of yellow. Your challenge? Complete the game within a specified time target to claim victory. Crafted using the robust Unity Game Engine, this project seamlessly combines entertainment with strategic gameplay, making it an exciting entry point for those eager to explore the world of game development.",
  //       url: "https://play.unity.com/mg/other/webgl-builds-374786",
  //       imgPath: "Roll-A-Ball.png",
  //     },
  //     {
  //       title: "Recipe App",
  //       description:
  //         "Embark on a cooking adventure with my Recipe App project. It's designed to be user-friendly, showcasing a variety of recipes with pictures, clear instructions, and ingredients. You can add your favorite recipes using the responsive form, which includes an option to add a picture link for a visual treat. What makes this project stand out is its focus on user responsiveness and the use of Firebase, a powerful database, for seamless data management. It's an excellent opportunity for those looking to explore storing data in real-world applications while enjoying the art of cooking!",
  //       url: "https://frabjous-churros-00b58e.netlify.app/",
  //       imgPath: "RecipeApp.png",
  //     },
  //     {
  //       title: "Wonderful Quotes",
  //       description:
  //         "Explore the basics of React and front-end development in my Wonderful Quotes project, where JavaScript takes center stage. This user-friendly application showcases a collection of quotes, allowing you to easily add your own using a simple form. Dive into the interactive experience of expressing your preference with like and dislike buttons, all managed seamlessly by React's state handling. This project simplifies the complexities of front-end development, making it an ideal starting point for anyone looking to grasp the fundamentals of creating dynamic and responsive user interfaces.",
  //       url: "https://creative-starship-aaf9b4.netlify.app/",
  //       imgPath: "Wonderful Quotes.png",
  //     },
  //   ];

  //   try 
  //   {
  //      const response = await fetch(
  //        `https://portfolio-web3350-default-rtdb.firebaseio.com/portfolio.json`,
  //        {
  //          method: "PUT",
  //          headers: { "Content-Type": "application/json" },
  //          body: JSON.stringify(projects),
  //        }
  //      );

  //      if (!response.ok) {
  //        console.log("PostContactInfo FAILED to post data to database...");
  //        return false;
  //      } else {
  //        console.log("PostContactInfo successful...", response);
  //        return true;
  //      }
  //    } catch (error) {
  //      console.error("PostContactInfo failed:", error);
  //      return false;
  //    }
  // }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Welcome To my Portfolio!</h2>
      <p className={classes.description}>
        Hello, I'm Sione Havili, a software engineer seeking a job opportunity in the Computer Science field.
        This portfolio was made using React, HTML, CSS and Javscript. Additionally, this portfolio serves as a showcase of projects I have worked on. Please feel free to explore any of my projects.
      </p>
      <button className={classes.button} onClick={()=>{navigate("/portfolio");}}>Begin Exploring Projects</button>
      <PdfViewer fileUrl="/SioneHavili_Resume.pdf" className={classes.pdfViewer} />
      {/* <button onClick={handleDataPost}>Post Data</button> */}
    </div>
  );
};

export default Home;
