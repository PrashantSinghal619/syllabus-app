import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { showSyllabus } from '../actions';

const SyllabusControl = ({ dispatch }) => {
	let standardInput, subjectInput;
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(showSyllabus(standardInput.value, subjectInput.value));
  }

	return (
		<Form
      onSubmit={(e) => handleSubmit(e)}
      id="syllabus-app-form"
      className="syllabus-app-form"
    >
      <Form.Row className="syllabus-app-form-row">
        <Form.Group as={Col} xs={12} sm={5} controlId="formStandard">
          <Form.Label>Select Standard:</Form.Label>
          <Form.Control
            as="select"
            id="standard-select"
            className="standard-select"
            defaultValue="12"
            ref={node => standardInput = node}
            required
          >
            <option value="11">11</option>
            <option value="12">12</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs={12} sm={5} controlId="formSubject">
          <Form.Label>Select Subject:</Form.Label>
          <Form.Control
            as="select"
            id="subject-select"
            className="subject-select"
            defaultValue="physics"
            ref={node => subjectInput = node}
            required
          >
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="maths">Maths</option>
          <option value="biology">Biology</option>
          </Form.Control>
        </Form.Group>
        <Col className="syllabus-go-wrapper" xs={12} sm={2}>
          <Button
            variant="primary"
            size="lg"
            id="syllabus-go"
            className="syllabus-go"
            type="submit"
          >
            Go
          </Button>
        </Col>
      </Form.Row>
    </Form>
	);
}

export default connect()(SyllabusControl);