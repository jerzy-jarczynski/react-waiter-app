// bootstrap
import { Row, Button, Col } from "react-bootstrap";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getAllTables, removeTableRequest } from "../../../redux/tablesRedux";

// router
import { NavLink } from "react-router-dom";

const Tables = ({ tables }) => {

  const dispatch = useDispatch();

  const allTables = useSelector(getAllTables);

  const handleClick = (tableId) => {
    dispatch(removeTableRequest(tableId));
  };

  if (allTables.length === 0) {
    return (
      <Row className="py-4">
        <Col xs={12}>
          Nothing to show
        </Col>
      </Row>      
    );
  }

  return (
    <Row className="my-3">
      {
        allTables.map(table => (      
          <div key={table.id}>
            <Col xs={12} className="d-flex flex-row justify-content-start align-items-center pt-2 pb-2">
              <h3 className="py-0 my-0 me-4">{ `Table ${table.id}` }</h3>
              <p className="py-0 my-0"><span className={ 'fw-bold' }>Status: </span>{ table.status }</p>
              <Button variant="danger" className="ms-auto me-2" onClick={() => handleClick(table.id)}>Remove</Button>
              <Button variant="primary" as={NavLink} to={`/table/${table.id}`}>Show more</Button>
            </Col>
            <hr />
          </div>
        ))
      }
    </Row>
  );

};

export default Tables;