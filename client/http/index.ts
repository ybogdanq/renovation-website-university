import axios from 'axios'

console.log(process.env.NODE_ENV)
const apiUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5212'
		: 'https://renovation-app-backend-wvx92.ondigitalocean.app/'

const $api = axios.create({
	withCredentials: true,
	baseURL: apiUrl,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
})

export default $api
