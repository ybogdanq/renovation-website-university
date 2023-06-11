type IRenovation = {
	id: number
	name: string
	description: string
	price: number
	imgsrc: string
	characteristics: string[]
}

export type ICommentRes = {
	id: number
	userName: string
	renovationId: number
	message: string
}

export type ICommentReq = {
	userName: string
	message: string
}

export interface IRenovationAdditionalData {
	comments: ICommentRes[]
	rating: number
}
export type IRenovationResponse = IRenovation & IRenovationAdditionalData
