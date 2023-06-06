'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef, useState } from 'react'
import cn from 'classnames'
import StarRatings from 'react-star-ratings'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { InView } from 'react-intersection-observer'
import Image from 'next/image'
import BedroomImage from './assets/Bedroom.png'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import { Navigation } from 'swiper'
import { Feedback } from './sections/Feedback'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenovationPage: FC<Props> = ({ className, ...props }) => {
	const [rating, setRating] = useState<number>(4.2)
	return (
		<div className={cn(className, 'pt-40')} {...props}>
			<div className="container">
				<div className="max-w-[90%] mx-auto">
					<Swiper
						modules={[Navigation]}
						navigation
						className="relative cursor-grab mb-12 mx-auto max-w-[95%]"
						spaceBetween={0}
						slidesPerView={1}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
					>
						<SwiperSlide className="p-2">
							<InView triggerOnce>
								<div className="relative w-full h-0 pt-[50%] mb-8">
									<Image
										src={BedroomImage.src}
										quality={100}
										className={cn(
											'styledImage styledImage-inView absolute top-0 left-0 right-0 bottom-0 object-cover'
										)}
										fill
										alt="product image"
									/>
								</div>
							</InView>
						</SwiperSlide>
					</Swiper>
					<div>
						<div className="flex items-center justify-between mb-7">
							<h1 className="defaultHeading uppercase not-italic tracking-wider font-bold text-3xl">
								Bedroom
							</h1>
							<StarRatings
								rating={rating}
								starRatedColor="#FFD233"
								starHoverColor="#FFD233"
								changeRating={newRating => setRating(newRating)}
								starDimension="30px"
								starSpacing="2px"
								numberOfStars={5}
								name="rating"
							/>
						</div>
						<p className="defaultText max-w-4xl mb-7">
							Maecenas luctus vehicula condimentum. Sed condimentum in massa quis bibendum. Proin
							sapien leo, aliquam vitae dui sed, tristique porta odio. Interdum et malesuada fames
							ac ante ipsum primis in faucibus. Ut nec pretium dolor, sed ultrices risus. Phasellus
							mollis ex vestibulum ullamcorper sagittis.
						</p>
						<span className="inline-block font-bold tracking-wider text-xl mb-7">900$</span>
						<ul className="pl-5 list-disc">
							<li>dimension drawing</li>
							<li>layout with arrangement of furniture and equipment</li>
							<li>
								preliminary selection of finishing materials, furniture and other key design
								elements
							</li>
							<li>3D visualization with real-existing key design elements</li>
							<li>updated furniture plan with purchase recommendations</li>
							<li>dimensional drawings of custom-made furniture</li>
						</ul>
					</div>

					<Feedback />
				</div>
			</div>
		</div>
	)
}
