import React from "react"

const GameSection = () => {
	const games = [
		{
			name: "2048 Game",
			description: "Classic 2048 Game",
			githubLink: "https://github.com/lucifer-prashant/2048_game",
			playLink: "https://lucifer-prashant.github.io/2048_game/",
			imageUrl:
				"data:image/jpeg;base64,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",
		},
		{
			name: "Falling Sand",
			description: "Vibrant Falling Sand Simulator",
			githubLink: "https://github.com/lucifer-prashant/FallingSand",
			playLink: "https://lucifer-prashant.github.io/FallingSand/",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJQWM7ZhCSRUIFFL_z8bDrTB_EzJ4zbxhCQ&s",
		},
		{
			name: "Evolution Simulator",
			description: "Customizable Evolution Sim",
			githubLink: "https://github.com/lucifer-prashant/EvoSim",
			playLink: "https://lucifer-prashant.github.io/EvoSim/",
			imageUrl: "https://i.imghippo.com/files/eXh2166Kg.png",
		},
	]

	return (
		<section className="min-h-screen flex items-center justify-center">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">My Games</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{games.map((game, index) => (
						<div
							key={index}
							className="bg-gray-800 p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
							<img
								src={game.imageUrl}
								alt={game.name}
								className="mb-4 rounded-lg"
								style={{ width: "100%", height: "200px", objectFit: "cover" }}
							/>
							<h3 className="text-2xl font-semibold mb-4">{game.name}</h3>
							<p className="mb-4">{game.description}</p>
							<div className="flex justify-between">
								<a
									href={game.githubLink}
									target="_blank"
									className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
									rel="noreferrer">
									GitHub
								</a>
								<a
									href={game.playLink}
									className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
									Play Game
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default GameSection
