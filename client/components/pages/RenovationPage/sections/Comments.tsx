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
			<h1 className="defaultHeading uppercase text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-10">
				Comments
			</h1>
			<div>
				{comments.map(({ id, message, userName }) => (
					<div key={id} className="flex items-center mb-12">
						<Avatar className="w-[50px] h-[50px] mr-5" />
						<div className="flex-1 py-6 px-8 bg-slate-100">
							<h3 className="defaultHeading not-italic font-normal text-xl mb-2">{userName}</h3>
							<p className="text-md leading-7">{message}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
