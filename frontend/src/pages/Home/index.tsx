import { NavLink } from "react-router-dom";
import "./home.css";
import Button from "../../components/shared/ui/Button";

const index: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content_container">
        <h1>docker images hub</h1>
        <NavLink to="/feed">
          <Button type="button" value="Explore"/>
        </NavLink>
      </div>
    </section>
  );
};

export default index;
