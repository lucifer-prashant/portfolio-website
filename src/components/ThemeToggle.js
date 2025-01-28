import React, { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

const SocialTooltip = ({ children, tooltip }) => {
	return (
		<div className="relative group">
			{children}
			<div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 transform -translate-x-1/2 left-1/2">
				{tooltip}
			</div>
		</div>
	)
}

const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(true)

	const toggleTheme = () => {
		setIsDark(!isDark)
		document.documentElement.classList.toggle("dark")
	}

	return (
		<SocialTooltip tooltip="Toggle Theme">
			<motion.button
				onClick={toggleTheme}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="fixed top-4 left-4 bg-gray-800 dark:bg-white p-2 rounded-full shadow-lg">
				{isDark ? (
					<Sun className="text-yellow-500" />
				) : (
					<Moon className="text-blue-500" />
				)}
			</motion.button>
		</SocialTooltip>
	)
}

export { ThemeToggle, SocialTooltip }
