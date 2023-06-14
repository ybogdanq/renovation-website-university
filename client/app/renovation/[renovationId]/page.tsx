import { RenovationPage } from '@/components/pages/RenovationPage'
import RenovationService from '@/services/RenovationService'
import { QueryKeys } from '@/types/QueryKeys'
import getQueryClient from '@/utils/react-query/getQueryClient'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'
import { use } from 'react'

interface Props {
	params: {
		renovationId: number
	}
}

const RenovationItem: NextPage<Props> = ({ params }) => {
	const renovationId = params.renovationId
	const queryClient = getQueryClient()
	use(
		queryClient.prefetchQuery(
			[QueryKeys.GetRenovation],
			async () => await RenovationService.getRenovationById(renovationId)
		)
	)
	use(
		queryClient.prefetchQuery(
			[QueryKeys.GetAllRenovations],
			async () => await RenovationService.getAllRenovations()
		)
	)
	const dehydratedState = dehydrate(queryClient)
	return (
		<Hydrate state={dehydratedState}>
			<RenovationPage />
		</Hydrate>
	)
}

export default RenovationItem
