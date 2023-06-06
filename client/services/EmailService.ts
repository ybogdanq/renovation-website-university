import $api from '@/http/index'
import { IContactRequestData } from '@/types/Email'

export default class EmailService {
	static async sendContactRequest(data: IContactRequestData) {
		try {
			return $api.post('/email/contact', {
				data
			})
		} catch (error) {
			return error
		}
	}
}
