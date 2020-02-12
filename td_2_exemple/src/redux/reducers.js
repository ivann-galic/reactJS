import {
  ADD_STUDENT,
  EDIT_STUDENT,
  DEL_STUDENT
} from './actions'


const initialState = {
/**
 * Student datas [{Object}]
 *
 * @param      {String}  {name}
 * @param      {Number}  {age}
 * @param      {Number}  {groupe}
 */
	students: [
		{
			name: 'Bidule',
			age: 56,
			groupe: 3
		}
	]
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
	console.log('reducer', action.type);
	switch (action.type) {

		case ADD_STUDENT:
			return { ...state, students: [ ...state.students, action.student ] };

		case EDIT_STUDENT:
			if (arrayHasIndex(state.students, action.datas.index)) {
				return {...state, students: state.students.map((sigmap, index) => {
					if ( index === action.datas.index ) {
						return action.datas.student;
					}
					return sigmap;
				})};
			}
			return state;

		case DEL_STUDENT:
			if (arrayHasIndex(state.students, action.index)) {
				return { ...state, students: [ ...state.students.filter((item, index) => index !== action.index) ] };
			}
			return state;

		default:
			return state
	}
}