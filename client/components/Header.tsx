'use client'
import React, { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import { Search } from './icons/index'
import { usePathname } from 'next/navigation'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
import { ClientRoutesEnum } from '@/types/ClientRoutesEnum'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '@/types/QueryKeys'
import RenovationService from '@/services/RenovationService'
import Link from 'next/link'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<Props> = ({ className, ...props }) => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const pathname = usePathname()
	const windowWidth = useWindowWidth()
	const queryClient = useQueryClient()

	const { data: allRenovations } = useQuery({
		queryKey: [QueryKeys.GetAllRenovations],
		queryFn: () => RenovationService.getAllRenovations()
	})

	const filteredRenovations =
		(allRenovations &&
			allRenovations.filter(renovation => {
				return renovation.name.toLocaleLowerCase().includes(searchValue) && searchValue
			})) ||
		[]

	return (
		<header
			className={cn(className, 'w-full z-20 absolute top-0', {
				'bg-neutral-700': pathname !== '/'
			})}
			{...props}
		>
			<div className="container flex align-middle justify-between py-5">
				{windowWidth < 768 && (
					<div
						onClick={() => setIsBurgerActive(true)}
						className="my-auto relative cursor-pointer w-7 [&>*]:block [&>*]:h-[2px] [&>*]:bg-white [&>*]:my-[5px]"
					>
						<span className=""></span>
						<span className=""></span>
						<span className=""></span>
					</div>
				)}
				<nav
					className={cn(
						'transition-all opacity-100 px-10 md:px-0 fixed md:relative top-0 bottom-0 left-0 min-h-screen md:min-h-fit flex align-middle justify-center md:justify-start bg-white md:bg-transparent text-black flex-col md:flex-row md:text-white text-large',
						windowWidth < 768
							? isBurgerActive
								? 'translate-x-0'
								: 'translate-x-[-100%]'
							: 'opacity-0'
					)}
				>
					{windowWidth < 768 && (
						<div onClick={() => setIsBurgerActive(false)} className="absolute p-3 top-0 right-0">
							&#x2715;
						</div>
					)}
					<ul className="flex flex-col md:flex-row align-middle md:[&>*]:mr-3 [&>*]:cursor-pointer [&>*]:duration-200 [&>*:hover]:text-slate-200 [&>*:hover]:underline [&>*]:leading-8">
						<li>
							<a href={ClientRoutesEnum.Index}>Home</a>
						</li>
						<li>
							<a href="/#inspiration">Inspiration</a>
						</li>
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#contact">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="relative border-b-2 border-white flex align-middle">
					<input
						value={searchValue}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
						placeholder="Search"
						type="text"
						className="placeholder:text-white max-w-[100px] md:max-w-xs w-full outline-none pb-1 text-white bg-transparent text-sm leading-6"
					/>
					<button className="scale-[80%]">
						<Search />
					</button>
					{filteredRenovations.length > 0 && (
						<div
							id={'results'}
							className="absolute right-0 -bottom-3 translate-y-[100%] bg-white min-w-[200px] py-2 px-3 border-2 border-black-600"
						>
							{filteredRenovations.map(renovation => (
								<Link key={renovation.id} href={ClientRoutesEnum.RenovationItem + renovation.id}>
									<div onClick={() => setSearchValue('')}>{renovation.name}</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	)
}
