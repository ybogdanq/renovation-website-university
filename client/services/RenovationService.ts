import $api from '@/http/index'
import { ICommentReq, ICommentRes, IRenovationResponse } from '@/types/Renovation'

export default class RenovationService {
	static async getAllRenovations(): Promise<IRenovationResponse[]> {
		const res = await $api.get('/renovation/all')
		return res.data
	}
	static async getRenovationById(id: number): Promise<IRenovationResponse> {
		const res = await $api.get<IRenovationResponse>('/renovation/' + id)
		return res.data
	}
	static async leaveCommentToRenovation(
		commentData: ICommentReq,
		renovationId: number
	): Promise<ICommentRes> {
		const res = await $api.post<ICommentRes>('/renovation/comment/' + renovationId, {
			commentData
		})
		return res.data
	}
}
