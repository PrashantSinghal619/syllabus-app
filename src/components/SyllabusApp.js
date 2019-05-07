import React from 'react';
import SyllabusControl from '../containers/SyllabusControl';
import SyllabusTable from '../containers/SyllabusTable';
import ModalWrapper from './ModalWrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../misc/bootstrap.min.css';
import '../misc/SyllabusApp.css';

const SyllabusApp = ({ showSyllabus }) => (
	<Container>
		<Row>
			<Col xs={1} sm={1}></Col>
      <Col className="syllabus-app" xs={10} sm={10}>
        <h3 className="syllabus-app-heading">Manage Syllabus</h3>
				<SyllabusControl />
				{
					showSyllabus &&
						<SyllabusTable />
				}
				<ModalWrapper />
			</Col>
			<Col xs={1} sm={1}></Col>
		</Row>
	</Container>
)

const mapStateToProps = (state) => ({
	showSyllabus: state.syllabus.showSyllabus,
})

SyllabusApp.propTypes = {
	showSyllabus: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(SyllabusApp);