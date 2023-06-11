import $api from '@/http/index'
import { ICommentReq, ICommentRes, IRatingRes, IRenovationResponse } from '@/types/Renovation'

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
		renovationId: number,
		commentData: ICommentReq
	): Promise<ICommentRes> {
		const res = await $api.post<ICommentRes>('/renovation/comment/' + renovationId, {
			commentData
		})
		return res.data
	}
	static async addNewRatingItem(renovationId: number, ratingCount: number): Promise<IRatingRes> {
		const res = await $api.post<IRatingRes>('/renovation/rating/' + renovationId, {
			ratingCount
		})
		return res.data
	}
}
