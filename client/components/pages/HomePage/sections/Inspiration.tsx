'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { ProductImage } from '../../blocks/ProductImage'
import KitchenImg from '../assets/kitchen.png'
import LivingRoomImg from '../assets/livingRoom.png'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
import { useQuery } from '@tanstack/react-query'
import RenovationService from '@/services/RenovationService'
import { QueryKeys } from '@/types/QueryKeys'
import { IRenovationResponse } from '@/types/Renovation'
import { ClientRoutesEnum } from '@/types/ClientRoutesEnum'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	renovations: IRenovationResponse[]
}

export const Inspiration: FC<Props> = ({ renovations, className, ...props }) => {
	const windowWidth = useWindowWidth()
	return (
		<div id="inspiration" className={cn(className, 'py-8 sm:py-12 md:py-16 lg:py-24')} {...props}>
			<div className="container">
				<h1 className="defaultHeading text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-5 md:mb-10">
					Inspiration
				</h1>
				<Swiper
					className="max-w-5xl cursor-grab"
					spaceBetween={0}
					slidesPerView={windowWidth > 768 ? 2 : 1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{renovations.map(renovation => (
						<SwiperSlide key={renovation.id} className="px-2 md:px-5 lg:px-10">
							<ProductImage
								link={ClientRoutesEnum.RenovationItem + renovation.id}
								image={renovation.imgsrc}
								productTitle={renovation.name}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
