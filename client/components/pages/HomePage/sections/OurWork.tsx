import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import OurWorkBg from '../assets/ourWorkBg.png'
import Image from 'next/image'
import { IRenovationResponse } from '@/types/Renovation'
import Link from 'next/link'
import { ClientRoutesEnum } from '@/types/ClientRoutesEnum'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	renovations: IRenovationResponse[]
}

export const OurWork: FC<Props> = ({ renovations, className, ...props }) => {
	return (
		<div className={cn(className, 'relative py-14 md:py-28')} {...props}>
			<Image
				src={OurWorkBg.src}
				fill
				className="absolute top-0 right-0 bottom-0 left-0 object-cover"
				alt="our work bg"
			/>
			<div className="relative z-10 container flex flex-col items-center justify-center">
				<h1 className="defaultHeading text-white uppercase tracking-wide text-2xl md:text-3xl lg:text-4xl mb-7 md:mb-10">
					Our work
				</h1>
				<div className="flex justify-center items-centerf flex-wrap flex-grow-0 flex-shrink-0 whitespace-nowrap md:whitespace-normal gap-x-2 md:gap-x-4 gap-y-3 md:gap-y-6 max-w-xl [&>*]:basis-[130px] [&>*]:px-2 [&>*]:md:px-8 [&>*]:md:basis-auto ">
					{renovations.map(renovation => (
						<Link key={renovation.id} href={ClientRoutesEnum.RenovationItem + renovation.id}>
							<button className="defaultBtn">{renovation.name}</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
