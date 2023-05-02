import "./navbar.css";
import Button from "../shared/ui/Button";
import { NavLink } from "react-router-dom";

type propType = {
  handleModalClose: () => void
}
const index: React.FC<propType> = ({ handleModalClose }) => {
  return (
    <nav className="navbar">
      <NavLink to='/'><img src="/images/docker-logo.svg" alt="docker logo" /></NavLink>
      <Button type="button" value="Add" action={handleModalClose} />
    </nav>
  );
};

export default index;
