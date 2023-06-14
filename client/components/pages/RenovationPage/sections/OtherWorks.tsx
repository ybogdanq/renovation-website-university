import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './OtherWorks.module.scss'
import cn from 'classnames'
import { SwiperSlide, Swiper } from 'swiper/react'
import { ProductImage } from '../../blocks/ProductImage'
import KitchenImg from '../../HomePage/assets/kitchen.png'
import LivingRoomImg from '../../HomePage/assets/livingRoom.png'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
import { IRenovationResponse } from '@/types/Renovation'
import { ClientRoutesEnum } from '@/types/ClientRoutesEnum'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentRenovation: IRenovationResponse
	renovations: IRenovationResponse[]
}

export const OtherWorks: FC<Props> = ({ currentRenovation, renovations, className, ...props }) => {
	const windowWidth = useWindowWidth()
	const filteredRenovations = renovations.filter(
		renovation => renovation.id !== currentRenovation.id
	)
	return (
		<div className={cn(className)} {...props}>
			<div className="container py-24">
				<h1 className="defaultHeading text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-10">
					Our works
				</h1>
				<Swiper
					className="max-w-5xl cursor-grab"
					spaceBetween={0}
					slidesPerView={windowWidth > 768 ? 2 : 1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{filteredRenovations.map(renovation => (
						<SwiperSlide key={renovation.id} className="px-10">
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
