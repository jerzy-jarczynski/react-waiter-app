import { Row, Col, Form, Button } from "react-bootstrap";

const TableForm = () => (
  <Form>
    <Row>
      <Col xs={8}>
        <Form.Group>
          <Row className="align-items-center">
            <Col xs={2}>
              <Form.Label className="mb-0">Status:</Form.Label>
            </Col>
            <Col>
              <Form.Select>
                <option>Busy</option>
                <option>Free</option>
                <option>Cleaning</option>
                <option>Reserved</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className="align-items-center justify-content-start">
            <Col xs={2}>
              <Form.Label className="mb-0">People:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="number" />
            </Col>
            <Col xs={1} className="text-center">
              {'/'}
            </Col>
            <Col xs={2}>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className="align-items-center justify-content-start">
            <Col xs={2}>
              <Form.Label className="mb-0">Bill:</Form.Label>
            </Col>
            <Col xs={1}>
              { '$' }
            </Col>
            <Col xs={2}>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" type="submit">
      Update
    </Button>
  </Form>
);

export default TableForm;