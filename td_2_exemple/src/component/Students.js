import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { addStudent, delStudent } from "../redux/actions";

class Students extends React.Component {
	addStudent() {
		this.props.addStudent({
	      name: 'Machin',
	      age: 10,
	      groupe: 3
	    });
	}

	delStudent(index) {
		this.props.delStudent(index);
	}

	render() {
		const { students } = this.props;
		return (
			<div>
				<button onClick={() => this.addStudent()}>Add</button>
				{students.map((student, index) =>
					(
						<p key={index}>
							{student.name} {student.age} <button onClick={() => this.delStudent(index)}>Delete</button>
						</p>
					)
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		students: state.students
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addStudent: student => {
			dispatch(addStudent(student))
		},
		delStudent: index => {
			dispatch(delStudent(index))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Students));






