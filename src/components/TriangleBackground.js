import React, { useRef, useEffect } from "react"

const TriangleBackground = ({ variant = "particles" }) => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext("2d")

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const colors = {
			particles: ["#4a90e2", "#5c7cfa", "#7950f2", "#22b8cf"],
			triangles: ["#ff7eb3", "#ff758c", "#ff6b6b", "#4c6ef5", "#5c7cfa"],
		}

		const mouse = { x: null, y: null }
		const particles = []

		class Particle {
			constructor(x = null, y = null) {
				this.x = x !== null ? x : Math.random() * canvas.width
				this.y = y !== null ? y : Math.random() * canvas.height
				this.size = Math.random() * 3 + 1
				this.speedX = (Math.random() - 0.5) * 1
				this.speedY = (Math.random() - 0.5) * 1
				this.color =
					colors[variant][Math.floor(Math.random() * colors[variant].length)]
			}

			update() {
				this.x += this.speedX
				this.y += this.speedY

				// Wrap around screen
				if (this.x < 0) this.x = canvas.width
				if (this.x > canvas.width) this.x = 0
				if (this.y < 0) this.y = canvas.height
				if (this.y > canvas.height) this.y = 0
			}

			draw() {
				ctx.fillStyle = this.color
				ctx.globalAlpha = variant === "particles" ? 0.5 : 0.7
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
				ctx.fill()
			}
		}

		const createParticles = (count) => {
			return Array.from({ length: count }, () => new Particle())
		}

		const addMouseParticles = (x, y) => {
			for (let i = 0; i < 5; i++) {
				particles.push(
					new Particle(
						x + (Math.random() - 0.5) * 50,
						y + (Math.random() - 0.5) * 50
					)
				)
			}
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.fillStyle =
				variant === "particles" ? "rgba(17, 24, 39, 0.9)" : "rgba(0, 0, 0, 0.1)"
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			particles.forEach((particle, index) => {
				particle.update()
				particle.draw()

				if (variant === "particles") {
					for (let j = index + 1; j < particles.length; j++) {
						const dx = particle.x - particles[j].x
						const dy = particle.y - particles[j].y
						const distance = Math.sqrt(dx * dx + dy * dy)

						if (distance < 100) {
							ctx.beginPath()
							ctx.strokeStyle = "rgba(255,255,255,0.1)"
							ctx.moveTo(particle.x, particle.y)
							ctx.lineTo(particles[j].x, particles[j].y)
							ctx.stroke()
						}
					}
				}
			})

			requestAnimationFrame(animate)
		}

		const handleMouseMove = (event) => {
			mouse.x = event.clientX
			mouse.y = event.clientY
			addMouseParticles(mouse.x, mouse.y)
		}

		const initialParticles = createParticles(
			variant === "particles" ? 150 : 100
		)
		particles.push(...initialParticles)

		animate()

		canvas.addEventListener("mousemove", handleMouseMove)
		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		})

		return () => {
			canvas.removeEventListener("mousemove", handleMouseMove)
		}
	}, [variant])

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 z-[-1] bg-gray-900"
			style={{ pointerEvents: "none" }}
		/>
	)
}

export default TriangleBackground
