import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div id="main-navigation">
      <Link to={"/menu"}> Menu</Link> | Gallery | Story
    </div>
  );
};

export default MainNavigation;
