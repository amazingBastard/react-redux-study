import axios from 'axios';

export function fetchUsers() {
	const request =  axios.get('http://jsonplaceholder.tyypicode.com/users');

	return (dispatch) => {
		request.then({data}) => {
			dispatch({type: 'FETCH_PROFILES', payload: data})
		});
	};
}
