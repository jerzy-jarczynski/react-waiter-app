// bootstrap
import { Row, Button, Col } from "react-bootstrap";
// redux
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";

const Tables = ({ tables }) => {

  const allTables = useSelector(getAllTables);

  console.log(allTables);

  return (
    <Row className="my-3">
      {
        allTables.map(table => (
          <>
            <Col xs={12} key={table.id} className="d-flex flex-row justify-content-start align-items-center pt-2 pb-4">
              <h3 className="py-0 my-0 me-4">{ `Table ${table.id}` }</h3>
              <p className="py-0 my-0"><span className={ 'fw-bold' }>Status: </span>{ table.status }</p>
              <Button variant="danger" className="ms-auto me-2">Remove</Button>
              <Button variant="primary">Show more</Button>
            </Col>
            <hr />
          </>
        ))
      }
    </Row>
  );

};

export default Tables;