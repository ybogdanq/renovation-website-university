import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { Button, Input, Textarea } from '@ui'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Feedback: FC<Props> = ({ className, ...props }) => {
  const [name, setName] = useState<string>("")
  const [comment, setComment] = useState<string>("")
	return (
		<div className={cn(className, 'py-28')} {...props}>
			<h1 className="defaultHeading uppercase text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-10">
        Leave your feedback
      </h1>
      <form>
        <Input className='mb-5' label='Your name' value={name} onChange={(e) => setName(e.target.value)} />
        <Textarea className='mb-5 w-full' resize={false} label='Your comment' value={comment} onChange={(e) => setComment(e.target.value)} />
        <Button type='submit' onClick={() => {}}>Send</Button>
      </form>
		</div>
	)
}
