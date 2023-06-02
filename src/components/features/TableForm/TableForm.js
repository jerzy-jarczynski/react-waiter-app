import { Row, Col, Form, Button } from "react-bootstrap";

const TableForm = () => (
  <Form>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Status:</Form.Label>
          <Form.Select>
            <option>Busy</option>
            <option>Free</option>
            <option>Cleaning</option>
            <option>Reserved</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>People</Form.Label>
          <Form.Control type="number" />
          {'/'}
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Bill</Form.Label>
            { '$' }
            <Form.Control type="number" />
        </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" type="submit">
      Update
    </Button>
  </Form>
);

export default TableForm;