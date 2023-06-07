import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import { commentsMock } from './commentsMock'
import { Avatar } from '@/components/icons'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Comments: FC<Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className)} {...props}>
			<h1 className="defaultHeading uppercase text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-10">
				Comments
			</h1>
			<div>
				{commentsMock.map(({ id, fullName, comment }) => (
					<div key={id} className="flex items-center mb-12">
						<Avatar className="w-[50px] h-[50px] mr-5" />
						<div className="flex-1 py-6 px-8 bg-slate-100">
							<h3 className="defaultHeading not-italic font-normal text-xl mb-2">{fullName}</h3>
							<p className="text-md leading-7">{comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
