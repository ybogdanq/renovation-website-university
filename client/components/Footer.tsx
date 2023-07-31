import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { Instagram } from './icons'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<Props> = ({ className, ...props }) => {
	return (
		<footer className="bg-[#474344]" {...props}>
			<div className="container px-5 flex flex-col sm:flex-row items-center justify-between py-6 text-white">
				<span className='mb-2 sm:mb-0'>Designed by Anastasia Karas</span>
				<span className='flex items-center gap-2'>
					<Instagram  />
					@tonigtem
				</span>
			</div>
		</footer>
	)
}
