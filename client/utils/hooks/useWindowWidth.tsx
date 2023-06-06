import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useWindowWidth = (): number => {
	const [windowWidth, setWindowWidth] = useState<number>(0)
	useEffect(() => {
		const windowWidthListener = () => {
			setWindowWidth(() => window.innerWidth)
		}
		if (window) {
			setWindowWidth(window.innerWidth)
			window.addEventListener('resize', windowWidthListener)
		}
		return () => {
			window.removeEventListener('resize', windowWidthListener)
		}
	}, [])

	return windowWidth || 10000
}

export default useWindowWidth
