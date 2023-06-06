import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Feedback: FC<Props> = ({ className, ...props }) => {
	return (
		<div className={cn(className, 'py-28')} {...props}>
			<h1 className="defaultHeading"></h1>
		</div>
	)
}
