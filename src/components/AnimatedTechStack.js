import React from "react"
import { motion } from "framer-motion"

const AnimatedTechStack = () => {
	const techLogos = [
		{
			src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
			alt: "Java",
		},
		{
			src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
			alt: "Python",
		},
		{
			src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
			alt: "React",
		},
		{
			src: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
			alt: "Node.js",
		},
		{
			src: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
			alt: "Spring",
		},
		{
			src: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
			alt: "MySQL",
		},
		{
			src: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
			alt: "Docker",
		},
		{
			src: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
			alt: "Kubernetes",
		},
		{
			src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
			alt: "Git",
		},
	]

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{techLogos.map((logo, index) => (
				<motion.img
					key={logo.alt}
					src={logo.src}
					alt={logo.alt}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						delay: index * 0.1,
						type: "spring",
						stiffness: 300,
					}}
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer"
				/>
			))}
		</div>
	)
}

export default AnimatedTechStack
