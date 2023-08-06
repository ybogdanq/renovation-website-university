import axios from 'axios'

const { API_URL } = process.env

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
})

export default $api
