type renovation = {
	id: number
	name: string
	description: string
	price: number
	imgsrc: string
}

type comment = {
	id: number
	renovationId: number
	message: string
}

export interface IRenovationAdditionalData {
	comments: comment[]
	rating: number
	characteristics: string[]
}
export type IRenovationResponse = renovation & IRenovationAdditionalData
