import React from "react"
import {
	Github,
	Linkedin,
	Link2,
	Home,
	Gamepad2,
	FolderKanban,
	Send,
	Download,
	ArrowRight,
	ArrowLeft,
	Mail,
	Phone,
	MapPin,
	Book,
	Award,
	Code,
	Star,
	Braces,
} from "lucide-react"

import Clarity from "@microsoft/clarity"
import NavigationHint from "./components/NavigationHint"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import ContactForm from "./components/ContactForm"
import { motion } from "framer-motion"
import { useSectionNavigation } from "./components/useSectionNavigation"
import AnimatedBackground from "./components/AnimatedBackground"
import { ThemeToggle, SocialTooltip } from "./components/ThemeToggle"
import AnimatedTechStack from "./components/AnimatedTechStack"
import TriangleBackground from "./components/TriangleBackground"
import GameSection from "./components/GameSection"
import ProjectSection from "./components/ProjectSection"
import resumePDF from "./assets/resume.pdf"

const projectId = "q8blyjritc"
Clarity.init(projectId)

const Portfolio = () => {
	const sections = [
		{ name: "home", icon: Home },
		{ name: "projects", icon: FolderKanban },
		{ name: "games", icon: Gamepad2 },
		{ name: "contact", icon: Send },
		{ name: "about", icon: Link2 },
	]

	const { activeSection, setActiveSection, navigateSection } =
		useSectionNavigation(sections)

	const handleDownloadResume = () => {
		const link = document.createElement("a")
		link.href = resumePDF
		link.download = "Prashant_Verma_Resume.pdf"
		link.click()
	}

	return (
		<>
			<NavigationHint />
			<Analytics />
			<SpeedInsights />
			<AnimatedBackground activeSection={activeSection}>
				<TriangleBackground
					variant={activeSection === "home" ? "particles" : "triangles"}
				/>
				{/* Navigation */}
				<nav className="fixed bottom-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
					<div className="container mx-auto flex justify-between items-center p-4">
						<button
							onClick={() => navigateSection("prev")}
							className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
							<ArrowLeft size={24} />
						</button>
						<div className="flex space-x-8 bg-gray-800 rounded-full px-6 py-3 shadow-lg">
							{sections.map((section) => {
								const Icon = section.icon
								return (
									<button
										key={section.name}
										onClick={() => setActiveSection(section.name)}
										className={`hover:text-blue-500 transition-colors ${
											activeSection === section.name
												? "text-blue-500"
												: "text-white"
										}`}>
										<Icon size={24} />
									</button>
								)
							})}
						</div>
						<button
							onClick={() => navigateSection("next")}
							className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
							<ArrowRight size={24} />
						</button>
					</div>
				</nav>
				{/* Home Section */}
				{activeSection === "home" && (
					<section className="min-h-screen flex items-center justify-center relative z-10">
						<div className="text-center">
							<h2 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-tight font-['Orbitron']">
								Prashant Verma
							</h2>
							<p className="text-2xl mb-8 text-gray-300 font-['Space_Grotesk'] tracking-wide">
								Software Developer | Game Creator | Problem Solver
							</p>

							{/* Social Links */}
							<div className="flex justify-center space-x-6 mb-8">
								{[
									{
										Icon: Github,
										link: "https://github.com/lucifer-prashant",
										tooltip: "GitHub Profile",
									},
									{
										Icon: Linkedin,
										link: "https://www.linkedin.com/in/prashant-verma-a2a717272",
										tooltip: "LinkedIn Profile",
									},
									{
										Icon: Braces,
										link: "https://codolio.com/profile/z",
										tooltip: "Codolio Profile",
									},
								].map(({ Icon, link, tooltip }) => (
									<SocialTooltip key={link} tooltip={tooltip}>
										<a
											href={link}
											target="_blank"
											className="hover:scale-110 transition-transform"
											rel="noreferrer">
											<Icon
												size={36}
												className="text-blue-400 hover:text-blue-600"
											/>
										</a>
									</SocialTooltip>
								))}
							</div>

							{/* Resume Download Button */}
							<button
								onClick={handleDownloadResume}
								className="fixed top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out hover:scale-105 flex items-center gap-2 text-white">
								<Download size={20} />
								<span className="text-sm">Resume</span>
							</button>
						</div>
					</section>
				)}
				{/* Projects Section */}
				{activeSection === "projects" && <ProjectSection />}
				{/* Games Section */}
				{activeSection === "games" && <GameSection />}
				{/* Enhanced Contact Section */}
				{activeSection === "contact" && (
					<section className="min-h-screen flex items-center justify-center relative z-10 p-8">
						<div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
							{/* Contact Info Card */}
							<div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
								<h2 className="text-4xl font-bold mb-8 text-blue-400 font-['Orbitron']">
									Let's Connect
								</h2>

								<div className="space-y-6">
									<div className="flex items-center space-x-4">
										<div className="bg-blue-500/20 p-3 rounded-full">
											<Mail className="text-blue-400 w-6 h-6" />
										</div>
										<div>
											<p className="text-gray-400">Email</p>
											<p className="text-xl text-gray-200">
												prashantverma1357@gmail.com
											</p>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-blue-500/20 p-3 rounded-full">
											<Phone className="text-blue-400 w-6 h-6" />
										</div>
										<div>
											<p className="text-gray-400">Phone</p>
											<p className="text-xl text-gray-200">+91 7586985253</p>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-blue-500/20 p-3 rounded-full">
											<MapPin className="text-blue-400 w-6 h-6" />
										</div>
										<div>
											<p className="text-gray-400">Location</p>
											<p className="text-xl text-gray-200">
												Bhubaneswar, Odisha
											</p>
										</div>
									</div>
								</div>

								<div className="mt-8">
									<h3 className="text-xl font-semibold mb-4 text-gray-300">
										Find me on
									</h3>
									<div className="flex space-x-4">
										<a
											href="https://github.com/lucifer-prashant"
											target="_blank"
											rel="noreferrer"
											className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors">
											<Github className="text-blue-400 w-6 h-6" />
										</a>
										<a
											href="https://www.linkedin.com/in/prashant-verma-a2a717272"
											target="_blank"
											rel="noreferrer"
											className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors">
											<Linkedin className="text-blue-400 w-6 h-6" />
										</a>
									</div>
								</div>
							</div>

							{/* Replace the old form with the ContactForm component */}
							<ContactForm />
						</div>
					</section>
				)}
				{/* Enhanced About Section */}
				{activeSection === "about" && (
					<section className="h-screen flex items-center justify-center relative z-10 p-4">
						<div className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] overflow-hidden mx-auto">
							{/* Header */}
							<div className="text-center mb-4">
								<h2 className="text-3xl font-bold mb-2 text-blue-400 font-['Orbitron']">
									About Me
								</h2>
								<p className="text-lg text-gray-300 max-w-2xl mx-auto">
									Passionate software developer with a keen interest in creating
									innovative solutions and exploring new technologies.
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-4 h-[calc(100%-100px)] px-4">
								{/* Academic Journey */}
								<div className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center">
									<div className="flex items-center space-x-3 mb-4">
										<Book className="text-blue-400 w-6 h-6" />
										<h3 className="text-xl font-semibold text-blue-400">
											Academic Journey
										</h3>
									</div>
									<ul className="space-y-3 text-gray-300 w-full max-w-md">
										<li className="border-l-2 border-blue-400 pl-4">
											<div className="font-semibold text-base">
												Kalinga Institute of Industrial Technology
											</div>
											<div className="text-blue-400">Computer Science</div>
											<div className="text-gray-400">CGPA: 8.72</div>
										</li>
										<li className="border-l-2 border-blue-400 pl-4">
											<div className="font-semibold text-base">
												Hem Sheela Model School, Durgapur
											</div>
											<div className="text-blue-400">Class XII</div>
											<div className="text-gray-400">Aggregate: 94.7%</div>
										</li>
										<li className="border-l-2 border-blue-400 pl-4">
											<div className="font-semibold text-base">
												St. Xavier's School, Durgapur
											</div>
											<div className="text-blue-400">Class X</div>
											<div className="text-gray-400">Aggregate: 95.3%</div>
										</li>
									</ul>
								</div>

								{/* About Me */}
								<div className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center">
									<div className="flex items-center space-x-3 mb-4">
										<Award className="text-blue-400 w-6 h-6" />
										<h3 className="text-xl font-semibold text-blue-400">
											About Me
										</h3>
									</div>
									<ul className="space-y-3 text-gray-300 w-full max-w-md">
										<li className="flex items-start space-x-3">
											<Star className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
											<span>
												Third-year Computer Science student at KIIT with a
												strong foundation in software development and
												problem-solving.
											</span>
										</li>
										<li className="flex items-start space-x-3">
											<Star className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
											<span>
												Passionate about building scalable web applications and
												AI-driven solutions, leveraging technologies like React,
												Node.js, and Spring Boot.
											</span>
										</li>
										<li className="flex items-start space-x-3">
											<Star className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
											<span>
												Proficient in Java, Python, and full-stack development,
												with experience in cloud computing, DevOps, and database
												management.
											</span>
										</li>
										<li className="flex items-start space-x-3">
											<Star className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
											<span>
												Avid problem solver with a track record of developing
												innovative projects, including a Google Meet clone and a
												file transfer system.
											</span>
										</li>
									</ul>
								</div>

								{/* Tech Stack takes full width at the bottom */}
								<div className="bg-gray-700/50 p-6 rounded-xl md:col-span-2 flex flex-col items-center">
									<div className="flex items-center space-x-3 mb-4">
										<Code className="text-blue-400 w-6 h-6" />
										<h3 className="text-xl font-semibold text-blue-400">
											Tech Stack
										</h3>
									</div>
									<div className="w-full max-w-4xl mx-auto">
										<AnimatedTechStack />
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</AnimatedBackground>
		</>
	)
}

export default Portfolio
