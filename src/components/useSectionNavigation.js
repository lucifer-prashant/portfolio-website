import { useState, useCallback, useEffect } from "react"

export const useSectionNavigation = (sections) => {
	const [activeSection, setActiveSection] = useState("home")

	const navigateSection = useCallback(
		(direction) => {
			const currentIndex = sections.findIndex(
				(section) => section.name === activeSection
			)
			const nextIndex =
				direction === "next"
					? (currentIndex + 1) % sections.length
					: (currentIndex - 1 + sections.length) % sections.length
			setActiveSection(sections[nextIndex].name)
		},
		[activeSection, sections]
	)

	useEffect(() => {
		const handleKeyDown = (e) => {
			switch (e.key) {
				case "ArrowRight":
					navigateSection("next")
					break
				case "ArrowLeft":
					navigateSection("prev")
					break
			}
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [navigateSection])

	return { activeSection, setActiveSection, navigateSection }
}
