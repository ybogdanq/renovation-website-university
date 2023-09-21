import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import { commentsMock } from './commentsMock'
import { Avatar } from '@/components/icons'
import { ICommentRes } from '@/types/Renovation'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	comments?: ICommentRes[]
}

export const Comments: FC<Props> = ({ comments, className, ...props }) => {
	return !comments || comments?.length === 0 ? (
		<></>
	) : (
		<div className={cn(className, 'py-8 sm:py-12 md:py-16 lg:py-24')} {...props}>
			<h1 className="defaultHeading text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-3 md:mb-10">
				Comments
			</h1>
			<div>
				{comments.map(({ id, message, userName }) => (
					<div key={id} className="flex items-center [&+&]:mt-6 md:[&+&]:mt-12">
						<Avatar className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-2 md:mr-5" />
						<div className="flex-1 py-3 md:py-6 px-4 md:px-8 bg-slate-100">
							<h3 className="defaultHeading not-italic font-medium text-l md:text-xl mb-1 md:mb-2">
								{userName}
							</h3>
							<p className="text-sm md:text-md leading-7">{message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
