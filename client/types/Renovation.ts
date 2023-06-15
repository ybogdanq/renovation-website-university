type IRenovation = {
	id: number
	name: string
	description: string
	price: number
	characteristics: string[]
	imgsrc: string[]
}

export type ICommentRes = {
	id: number
	renovationId: number
	userName: string
	message: string
}

export type ICommentReq = {
	userName: string
	message: string
}

export type IRatingRes = {
	id: number
	renovationId: number
	rating: number
}

export interface IRenovationAdditionalData {
	comments: ICommentRes[]
	rating: number
}
export type IRenovationResponse = IRenovation & IRenovationAdditionalData
