import { PageProps } from '@/.next/types/app/layout'
import { RenovationPage } from '@/components/pages/RenovationPage'
import RenovationService from '@/services/RenovationService'
import getQueryClient from '@/utils/react-query/getQueryClient'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default async function RenovationItem({ params }: PageProps) {
	const renovationId = params.renovationId as unknown as number
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(
		['hydrate-renovation'],
		async () => await RenovationService.getRenovationById(renovationId)
	)
	const dehydratedState = dehydrate(queryClient)
	return (
		<Hydrate state={dehydratedState}>
			<RenovationPage />
		</Hydrate>
	)
}
