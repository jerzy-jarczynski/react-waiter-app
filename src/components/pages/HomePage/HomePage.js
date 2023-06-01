// components
import Tables from "../../features/Tables/Tables";
// bootstrap
import { Button } from "react-bootstrap";
// router
import { NavLink } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>All tables</h1>
        <Button variant="outline-info" as={NavLink} to="/table/add">Add table</Button>
      </div>
      <Tables />
    </div>
  );

};

export default HomePage;