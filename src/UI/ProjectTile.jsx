import classes from "./ProjectTile.module.css";

const PortfolioTile = (props) => {
  const openNewTab = () => {
    window.open(props.url, "_blank");
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleImageContainer}>
        <h3 className={classes.title}>{props.title}</h3>
        <img className={classes.image} src={props.imgSrc} />
      </div>

      <div className={classes.descriptionContainer}>
        <h3>Description</h3>
        <div className={classes.description}>{props.description}</div>
        <button className={classes.button} onClick={openNewTab}>Visit Project</button>
      </div>
    </div>
  );
};

export default PortfolioTile;
