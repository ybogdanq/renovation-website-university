import $api from '@/http/index'
import { IRenovationResponse } from '@/types/Renovation'
import { AxiosResponse } from 'axios'

export default class RenovationService {
	static async getAllRenovations(): Promise<AxiosResponse<IRenovationResponse[]>> {
		return await $api.get<IRenovationResponse[]>('/renovation/all')
	}
	static async getRenovationById(id: number) {
		const res = await fetch('http://localhost:5212/renovation/' + id)
		console.log(res)
		const renovation = (await res.json()) as IRenovationResponse

		return renovation
	}
}
