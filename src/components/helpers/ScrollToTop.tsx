import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
	const { pathname } = useLocation()

	const goToTop = () => {
		const c = document.documentElement.scrollTop || document.body.scrollTop
		if (c > 0) {
			window.requestAnimationFrame(goToTop)
			window.scrollTo(0, c - c / 8)
		}
	}

	useEffect(() => {
		goToTop()
	}, [pathname])

	return null
}
