import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { InView } from 'react-intersection-observer'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: StaticImageData
	productTitle: string
}

export const ProductImage: FC<Props> = ({ image, productTitle, className, ...props }) => {
	return (
		<div className={cn(className, 'p-3')} {...props}>
			<InView triggerOnce>
				{({ inView, ref }) => (
					<div ref={ref} className="relative w-full h-0 pt-[60%] mb-8">
						<Image
							src={image.src}
							className={cn('styledImage absolute top-0 left-0 right-0 bottom-0 object-cover', {
								'styledImage-inView': inView
							})}
							fill
							alt="product image"
						/>
					</div>
				)}
			</InView>
			<h5 className="defaultHeading not-italic text-center tracking-wide text-lg md:text-xl lg:text-2xl">
				{productTitle}
			</h5>
		</div>
	)
}
