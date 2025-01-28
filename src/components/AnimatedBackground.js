import React from "react"
import { motion } from "framer-motion"

const backgroundVariants = {
	home: {
		background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
		transition: { duration: 0.5 },
	},
	projects: {
		background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
		transition: { duration: 0.5 },
	},
	games: {
		background: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
		transition: { duration: 0.5 },
	},
	contact: {
		background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
		transition: { duration: 0.5 },
	},
	about: {
		background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
		transition: { duration: 0.5 },
	},
}

const AnimatedBackground = ({ activeSection, children }) => {
	return (
		<motion.div
			animate={backgroundVariants[activeSection]}
			className="min-h-screen text-white relative overflow-hidden">
			{children}
		</motion.div>
	)
}

export default AnimatedBackground
