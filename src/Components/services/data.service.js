import axios from 'axios';
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://elm-research.ml/api/v1/';
const apiService = {
	get(handle) {
		return axios.get(handle).then((res) => res.data.content);
	}
};
export default apiService;
