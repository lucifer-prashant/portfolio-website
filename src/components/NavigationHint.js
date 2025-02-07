import React, { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const NavigationHint = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false)
		}, 7500)

		const handleKeyPress = (e) => {
			if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
				setIsVisible(false)
			}
		}

		window.addEventListener("keydown", handleKeyPress)

		return () => {
			clearTimeout(timer)
			window.removeEventListener("keydown", handleKeyPress)
		}
	}, [])

	if (!isVisible) return null

	return (
		<div
			className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl shadow-xl z-50 transition-all duration-300 ease-in-out hover:scale-105 cursor-default"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className="flex items-center space-x-4 text-white">
				<ArrowLeft
					className={`w-5 h-5 transition-transform duration-300 ${
						isHovered ? "-translate-x-2" : ""
					}`}
				/>
				<span className="text-lg font-bold tracking-wide">
					USE ARROWS TO NAVIGATE
				</span>
				<ArrowRight
					className={`w-5 h-5 transition-transform duration-300 ${
						isHovered ? "translate-x-2" : ""
					}`}
				/>
			</div>
			<div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-b-xl">
				<div
					className="h-full bg-white/40 rounded-b-xl transition-all duration-[7500ms] ease-linear"
					style={{ width: isVisible ? "0%" : "100%" }}
				/>
			</div>
		</div>
	)
}

export default NavigationHint
