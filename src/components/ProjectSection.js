import React from "react"
import { Github } from "lucide-react"

const ProjectSection = () => {
	const projects = [
		{
			name: "Duplicate File Cleaner",
			description: "Checks for duplicate files in specified directory",
			technologies: ["Javascript", "Electron", "Node.js"],
			githubLink: "https://github.com/lucifer-prashant/DuplicateFileCleaner",
			image: "https://i.imghippo.com/files/bjba9027v.png",
		},
	]

	return (
		<section className="min-h-screen flex items-center justify-center">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
				<div className="flex justify-center">
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-gray-800 p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
								<h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
								<img
									src={project.image}
									alt={project.name}
									// className="w-400 h-48 mb-4 rounded-lg object-cover"
									className="mb-4 rounded-lg"
									style={{ width: "100%", height: "200px", objectFit: "cover" }}
								/>
								<p className="mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="bg-gray-700 px-2 py-1 rounded text-sm">
											{tech}
										</span>
									))}
								</div>
								<div>
									<a
										href={project.githubLink}
										target="_blank"
										className="flex items-center justify-center bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
										rel="noreferrer">
										<Github className="mr-2" /> GitHub
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectSection
