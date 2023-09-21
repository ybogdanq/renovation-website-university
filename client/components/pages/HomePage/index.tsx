'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from 'react'
import cn from 'classnames'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { OurWork } from './sections/OurWork'
import { Inspiration } from './sections/Inspiration'
import { Contact } from './sections/Contact'
import { useQuery } from '@tanstack/react-query'
import RenovationService from '@/services/RenovationService'
import { NotificationContainer } from 'react-notifications'
import { QueryKeys } from '@/types/QueryKeys'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Homepage: FC<Props> = ({ className, ...props }) => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: [QueryKeys.GetAllRenovations],
		queryFn: () => RenovationService.getAllRenovations()
	})
	return (
		<div className={cn(className)} {...props}>
			<Hero />
			<About />
			<OurWork renovations={data || []} />
			<Inspiration renovations={data || []} />
			<Contact />
			<NotificationContainer />
		</div>
	)
}
