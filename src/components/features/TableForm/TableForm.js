import { Row, Col, Form, Button } from "react-bootstrap";

const TableForm = () => (
  <Form>
    <Row>
      <Col xs={12} sm={10} md={8} lg={7} xl={5}>
        <Form.Group className="mb-3">
          <Row className="align-items-center">
            <Col xs={3} sm={2}>
              <Form.Label className="mb-0">Status:</Form.Label>
            </Col>
            <Col xs={9} md={8}>
              <Form.Select>
                <option>Busy</option>
                <option>Free</option>
                <option>Cleaning</option>
                <option>Reserved</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row className="align-items-center justify-content-start">
            <Col xs={3} sm={2}>
              <Form.Label className="mb-0">People:</Form.Label>
            </Col>
            <Col xs={3} sm={2}>
              <Form.Control type="number" />
            </Col>
            <Col className="text-center px-0" style={{ width: 'auto', maxWidth: 'auto', flex: '0 0' }}>
              {'/'}
            </Col>
            <Col xs={3} sm={2}>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row className="align-items-center justify-content-start">
            <Col xs={3} sm={2}>
              <Form.Label className="mb-0">Bill:</Form.Label>
            </Col>
            <Col className="text-center" style={{ width: 'auto', maxWidth: 'auto', flex: '0 0', paddingRight: '0' }}>
              { '$' }
            </Col>
            <Col xs={3} sm={2}>
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