'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { Button, Input, Textarea } from '@ui'
import EmailService from '@/services/EmailService'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Contact: FC<Props> = ({ className, ...props }) => {
	const [firstName, setFirstName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [additionalInfo, setAdditionalInfo] = useState<string>('')
	return (
		<div className={cn(className, 'py-24')} {...props}>
			<div className="container">
				<h1 className="defaultHeading uppercase text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 md:mb-5 tracking-wide">
					Contact us
				</h1>
				<p className="defaultText mx-auto text-center max-w-xl">
					Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
					model text
				</p>
				<div className="max-w-4xl mx-auto py-10 flex flex-wrap justify-between gap-y-6 gap-x-12">
					<Input
						className="max-w-[calc(50%-1.5rem)] w-full"
						label="First name"
						onChange={e => {
							setFirstName(e.target.value)
						}}
						value={firstName}
					/>
					<Input
						className="max-w-[calc(50%-1.5rem)] w-full"
						label="Last name"
						onChange={e => {
							setLastName(e.target.value)
						}}
						value={lastName}
					/>
					<Input
						className="max-w-[calc(50%-1.5rem)] w-full"
						label="Phone"
						onChange={e => {
							setPhone(e.target.value)
						}}
						value={phone}
					/>
					<Input
						className="max-w-[calc(50%-1.5rem)] w-full"
						label="Email"
						onChange={e => {
							setEmail(e.target.value)
						}}
						value={email}
					/>
					<Textarea
						resize={false}
						className="w-full"
						label="Additional info"
						onChange={e => {
							setAdditionalInfo(e.target.value)
						}}
						value={additionalInfo}
					/>
					<div className="w-full flex items-center justify-center">
						<Button
							onClick={() =>
								EmailService.sendContactRequest({
									email: email,
									firstName: firstName,
									lastName: lastName,
									phone: phone,
									additionalInfo: additionalInfo
								})
							}
						>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
