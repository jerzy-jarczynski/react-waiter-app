// bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
// react
import { useState, useEffect } from "react";
// proptypes
import PropTypes from 'prop-types';

const TableForm = ({ tableId, action, actionText, ...props }) => {

  // local state
  const [id] = useState(tableId);
  const [status, setStatus] = useState(props.status || 'Free');
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || 0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || 0);
  const [bill, setBill] = useState(props.bill || 0);

  // form submit
  const handleSubmit = e => {
    e.preventDefault();
    action({ id, status, peopleAmount, maxPeopleAmount, bill });
  };

  useEffect(() => {
    // set peopleAmount 0 if Free/Cleaning
    if (status === 'Free' || status === 'Cleaning') {
      setPeopleAmount(0);
    }
    // 0 < peopleAmount < 10
    if (peopleAmount < 0) {
      setPeopleAmount(0);
    }
    if (peopleAmount > 10) {
      setPeopleAmount(10);
    }
    // 0 < maxPeopleAmount < 10
    if (maxPeopleAmount < 0) {
      setMaxPeopleAmount(0);
    }
    if (maxPeopleAmount > 10) {
      setMaxPeopleAmount(10);
    }
    // peopleAmount < maxPeopleAmount
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [status, peopleAmount, maxPeopleAmount]);

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} sm={10} md={8} lg={7} xl={5}>
          <Form.Group className="mb-3" controlId="formBasicStatus">
            <Row className="align-items-center">
              <Col xs={3} sm={2}>
                <Form.Label className="mb-0">Status:</Form.Label>
              </Col>
              <Col xs={9} md={8}>
                <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
                  <option>Busy</option>
                  <option>Free</option>
                  <option>Cleaning</option>
                  <option>Reserved</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPeople">
            <Row className="align-items-center justify-content-start">
              <Col xs={3} sm={2}>
                <Form.Label className="mb-0">People:</Form.Label>
              </Col>
              <Col xs={4} sm={3}>
                <Form.Control type="number" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)} />
              </Col>
              <Col className="text-center px-0" style={{ width: 'auto', maxWidth: 'auto', flex: '0 0' }}>
                {'/'}
              </Col>
              <Col xs={4} sm={3}>
                <Form.Control type="number" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
              </Col>
            </Row>
          </Form.Group>
          {
            status === 'Busy' &&
            <Form.Group className="mb-3" controlId="formBasicBill">
              <Row className="align-items-center justify-content-start">
                <Col xs={3} sm={2}>
                  <Form.Label className="mb-0">Bill:</Form.Label>
                </Col>
                <Col className="text-center" style={{ width: 'auto', maxWidth: 'auto', flex: '0 0', paddingRight: '0' }}>
                  { '$' }
                </Col>
                <Col xs={4} sm={3}>
                  <Form.Control type="number" value={bill} onChange={e => setBill(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
          }
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        { actionText }
      </Button>
    </Form>
  );
};

TableForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  tableId: PropTypes.number.isRequired,
  status: PropTypes.string,
  peopleAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPeopleAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TableForm;