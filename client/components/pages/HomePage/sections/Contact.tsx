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
		<div id="contact" className={cn(className, 'py-8 sm:py-12 md:py-16 lg:py-24')} {...props}>
			<div className="container">
				<h1 className="defaultHeading text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-3 md:mb-5">
					Contact us
				</h1>
				<p className="defaultText mx-auto text-center max-w-xl text-sm sm:text-l lg:text-xl tracking-wide">
					Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
					model text
				</p>
				<div className="max-w-4xl mx-auto py-7 md:py-10 flex flex-wrap justify-between gap-y-4 md:gap-y-6 gap-x-12">
					<Input
						className="max-w-full md:max-w-[calc(50%-1.5rem)] w-full"
						label="First name"
						onChange={e => {
							setFirstName(e.target.value)
						}}
						value={firstName}
					/>
					<Input
						className="max-w-full md:max-w-[calc(50%-1.5rem)] w-full"
						label="Last name"
						onChange={e => {
							setLastName(e.target.value)
						}}
						value={lastName}
					/>
					<Input
						className="max-w-full md:max-w-[calc(50%-1.5rem)] w-full"
						label="Phone"
						onChange={e => {
							setPhone(e.target.value)
						}}
						value={phone}
					/>
					<Input
						className="max-w-full md:max-w-[calc(50%-1.5rem)] w-full"
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
							onClick={() => {
								EmailService.sendContactRequest({
									email: email,
									firstName: firstName,
									lastName: lastName,
									phone: phone,
									additionalInfo: additionalInfo
								})
								alert('Sent')
							}}
						>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
