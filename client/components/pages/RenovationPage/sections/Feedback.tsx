import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { Button, Input, Textarea } from '@ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import RenovationService from '@/services/RenovationService'
import { useParams } from 'next/navigation'
import { QueryKeys } from '@/types/QueryKeys'
import { createNotification } from '@/utils/createNotification'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Feedback: FC<Props> = ({ className, ...props }) => {
	const params = useParams()
	const renovationId = params.renovationId as unknown as number
	const [name, setName] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const queryClient = useQueryClient()

	const { mutate: addCommentAction, isLoading } = useMutation({
		mutationFn: async () =>
			await RenovationService.leaveCommentToRenovation(renovationId, {
				userName: name,
				message
			}),
		onError: () => {
			console.error('Error to post new comment to renovation')
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeys.GetRenovation] })
		}
	})

	const addNewComment = async () => {
		if (!name) {
			return createNotification('error')
		}
		if (!message) {
			return createNotification('error')
		}
		addCommentAction()
	}

	return (
		<div className={cn(className, 'py-8 sm:py-12 md:py-16 lg:py-20')} {...props}>
			<h1 className="defaultHeading text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-3 md:mb-10">
				Leave your feedback
			</h1>
			<Input
				className="mb-5 w-full md:w-fit"
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
			<Button className="block mx-auto md:m-0" type="button" onClick={addNewComment}>
				Send
			</Button>
		</div>
	)
}
