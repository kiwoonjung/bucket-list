import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <dvi>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </dvi>
  );
}

export default Layout;
