import React, { useEffect, useRef } from "react"

const ParticleBackground = () => {
	const canvasRef = useRef(null)
	const particlesArrayRef = useRef([])
	const mouseRef = useRef({ x: null, y: null, radius: 150 })

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext("2d")

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		class Particle {
			constructor(x = null, y = null) {
				this.x = x !== null ? x : Math.random() * canvas.width
				this.y = y !== null ? y : Math.random() * canvas.height
				this.size = Math.random() * 3 + 1
				this.baseX = this.x
				this.baseY = this.y
				this.density = Math.random() * 30 + 1
				this.speedX = Math.random() * 1 - 0.5
				this.speedY = Math.random() * 1 - 0.5
			}

			update() {
				// Normal movement
				this.x += this.speedX
				this.y += this.speedY

				// Mouse interaction
				if (mouseRef.current.x != null) {
					const dx = mouseRef.current.x - this.x
					const dy = mouseRef.current.y - this.y
					const distance = Math.sqrt(dx * dx + dy * dy)
					const forceDirectionX = dx / distance
					const forceDirectionY = dy / distance
					const maxDistance = mouseRef.current.radius
					const force = (maxDistance - distance) / maxDistance

					if (distance < maxDistance) {
						// Push particles away from mouse
						this.x -= forceDirectionX * force * 5
						this.y -= forceDirectionY * force * 5
					} else {
						// Gradually return to original position
						if (this.x !== this.baseX) {
							const dx = this.baseX - this.x
							this.x += dx * 0.02
						}
						if (this.y !== this.baseY) {
							const dy = this.baseY - this.y
							this.y += dy * 0.02
						}
					}
				}

				// Wrap around screen
				if (this.x < 0) this.x = canvas.width
				if (this.x > canvas.width) this.x = 0
				if (this.y < 0) this.y = canvas.height
				if (this.y > canvas.height) this.y = 0
			}

			draw() {
				ctx.fillStyle = "rgba(255,255,255,0.5)"
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
				ctx.fill()
			}
		}

		// Create initial particles
		const initialParticlesCount = 150
		particlesArrayRef.current = Array.from(
			{ length: initialParticlesCount },
			() => new Particle()
		)

		// Mouse move handler
		const handleMouseMove = (event) => {
			const rect = canvas.getBoundingClientRect()
			mouseRef.current.x = event.clientX - rect.left
			mouseRef.current.y = event.clientY - rect.top
		}

		// Mouse leave handler
		const handleMouseLeave = () => {
			mouseRef.current.x = null
			mouseRef.current.y = null
		}

		// Click handler with explosion effect
		const handleClick = (event) => {
			const rect = canvas.getBoundingClientRect()
			const x = event.clientX - rect.left
			const y = event.clientY - rect.top

			// Create explosion effect
			for (let i = 0; i < 20; i++) {
				const angle = (Math.PI * 2 * i) / 20
				const velocity = 2
				const particle = new Particle(x, y)
				particle.speedX = Math.cos(angle) * velocity
				particle.speedY = Math.sin(angle) * velocity
				particlesArrayRef.current.push(particle)
			}

			// Remove excess particles after delay
			setTimeout(() => {
				if (particlesArrayRef.current.length > initialParticlesCount) {
					particlesArrayRef.current = particlesArrayRef.current.slice(
						0,
						initialParticlesCount
					)
				}
			}, 5000)
		}

		// Animation loop
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < particlesArrayRef.current.length; i++) {
				const particle = particlesArrayRef.current[i]
				particle.update()
				particle.draw()

				// Connect particles
				for (let j = i + 1; j < particlesArrayRef.current.length; j++) {
					const dx = particle.x - particlesArrayRef.current[j].x
					const dy = particle.y - particlesArrayRef.current[j].y
					const distance = Math.sqrt(dx * dx + dy * dy)

					if (distance < 100) {
						ctx.beginPath()
						ctx.strokeStyle = `rgba(255,255,255,${0.2 * (1 - distance / 100)})`
						ctx.moveTo(particle.x, particle.y)
						ctx.lineTo(
							particlesArrayRef.current[j].x,
							particlesArrayRef.current[j].y
						)
						ctx.stroke()
					}
				}
			}

			requestAnimationFrame(animate)
		}

		animate()

		// Event listeners
		canvas.addEventListener("mousemove", handleMouseMove)
		canvas.addEventListener("mouseleave", handleMouseLeave)
		canvas.addEventListener("click", handleClick)

		// Resize handler
		const resizeHandler = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		window.addEventListener("resize", resizeHandler)

		return () => {
			canvas.removeEventListener("mousemove", handleMouseMove)
			canvas.removeEventListener("mouseleave", handleMouseLeave)
			canvas.removeEventListener("click", handleClick)
			window.removeEventListener("resize", resizeHandler)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 z-[-1] bg-gray-900"
			style={{ pointerEvents: "auto", cursor: "pointer" }}
		/>
	)
}

export default ParticleBackground
