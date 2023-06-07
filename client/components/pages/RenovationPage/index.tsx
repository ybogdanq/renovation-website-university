'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef, useState } from 'react'
import cn from 'classnames'
import StarRatings from 'react-star-ratings'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { InView } from 'react-intersection-observer'
import Image from 'next/image'
import BedroomImage from './assets/Bedroom.png'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import {default as SwiperType,  Navigation } from 'swiper'
import { Feedback } from './sections/Feedback'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenovationPage: FC<Props> = ({ className, ...props }) => {
	const [rating, setRating] = useState<number>(4.2)
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slideNext();
  }, []);

	return (
		<div className={cn(className, 'pt-40')} {...props}>
			<div className="container">
				<div className="max-w-[75%] mx-auto">
          <div className="relative">
            <div className="absolute -left-12 top-[50%] translate-y-[-50%]" onClick={handlePrev} ><ArrowLeft /></div>
            <div className="absolute -right-10 top-[50%] translate-y-[-50%]" onClick={handleNext} ><ArrowRight /></div>
            <Swiper
              ref={sliderRef}
              className="relative cursor-grab mb-12 mx-auto w-full"
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide className="p-3">
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
              <SwiperSlide className="p-3">
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
          </div>
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
