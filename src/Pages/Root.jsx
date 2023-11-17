import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import classes from "./Root.module.css";

const RootLayout = () => 
{

    return (
      <div className={classes.mainContainer}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    );
};

export default RootLayout;
