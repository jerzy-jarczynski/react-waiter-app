import { Row, Button, Col, Modal, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllTables, removeTableRequest } from "../../../redux/tablesRedux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Tables = ({ tables }) => {
  const [tableOutId, setTableOutId] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  const dispatch = useDispatch();
  const allTables = useSelector(getAllTables);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (tableId) => {
    setTableOutId(tableId);
    handleShow();
  };

  const handleRemove = (tableId) => {
    handleClose();
    dispatch(removeTableRequest(tableId));
  };

  useEffect(() => {
    if (allTables.length > 0) {
      setLoading(false);
    }
  }, [allTables]);

  if (loading) {
    // Show spinner while loading
    return (
      <Row className="my-3">
        <Col className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    );
  }

  if (allTables.length === 0) {
    return (
      <Row className="py-4">
        <Col xs={12}>Nothing to show</Col>
      </Row>
    );
  }

  return (
    <>
      <Row className="my-3">
        {allTables.map((table) => (
          <div key={table.id}>
            <Col
              xs={12}
              className="d-flex flex-row justify-content-start align-items-center pt-2 pb-2"
            >
              <h3 className="py-0 my-0 me-4">{`Table ${table.id}`}</h3>
              <p className="py-0 my-0">
                <span className={"fw-bold"}>Status: </span>
                {table.status}
              </p>
              <Button
                variant="danger"
                className="ms-auto me-2"
                onClick={() => handleClick(table.id)}
              >
                Remove
              </Button>
              <Button variant="primary" as={NavLink} to={`/table/${table.id}`}>
                Show more
              </Button>
            </Col>
            <hr />
          </div>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this table from the server.
          <br />
          Are you sure you want to do this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleRemove(tableOutId)}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tables;