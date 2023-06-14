import { Homepage } from '@/components/pages/HomePage/index'
import RenovationService from '@/services/RenovationService'
import { QueryKeys } from '@/types/QueryKeys'
import getQueryClient from '@/utils/react-query/getQueryClient'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { use } from 'react'

export default async function Home() {
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery(
		[QueryKeys.GetAllRenovations],
		async () => await RenovationService.getAllRenovations()
	)

	const dehydratedState = dehydrate(queryClient)
	return (
		<Hydrate state={dehydratedState}>
			<Homepage />
		</Hydrate>
	)
}
