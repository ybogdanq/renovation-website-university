import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { Button, Input, Textarea } from '@ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import RenovationService from '@/services/RenovationService'
import { useParams } from 'next/navigation'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Feedback: FC<Props> = ({ className, ...props }) => {
	const params = useParams()
	const renovationId = params.renovationId as unknown as number
	const [name, setName] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const queryClient = useQueryClient()

	const { mutate: addCommentAction, isLoading } = useMutation(
		async () =>
			await RenovationService.leaveCommentToRenovation(
				{
					userName: name,
					message
				},
				renovationId
			),
		{
			onError: () => {
				console.error('Error to post new comment to renovation')
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ['get-renovation'] })
			}
		}
	)

	const addNewComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault()
		addCommentAction()
	}

	return (
		<div className={cn(className, 'py-28')} {...props}>
			<h1 className="defaultHeading uppercase text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-10">
				Leave your feedback
			</h1>
			<Input
				className="mb-5"
				label="Your name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Textarea
				className="mb-5 w-full"
				resize={false}
				label="Your message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<Button type="button" onClick={addNewComment}>
				Send
			</Button>
		</div>
	)
}
