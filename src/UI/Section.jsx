import React, { useState } from "react";
import "./Section.module.css";
import classes from "./Section.module.css";

const Section = ({ title, content, isOpen, toggleSection }) => 
{
  const arrow = "&#9650;";
  return (
    <>
      <div className={isOpen ? classes.sectionHeaderOpen : classes.sectionHeader} onClick={toggleSection}>
        <div>{title}</div> <span className={isOpen ? classes.arrowOpen :classes.arrow}>{isOpen ? <>&#128899;</> : <>&#128898;</>}</span>
      </div>
      <div className={isOpen ? classes.sectionOpen : classes.section}>
        <div className={classes.sectionContent}>{content}</div>
      </div>
    </>
  );
};

export default Section;