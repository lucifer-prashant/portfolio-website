import React, { useState } from "react"
import { Send } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Analytics } from "@vercel/analytics/react"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [status, setStatus] = useState({
		sending: false,
		error: null,
		success: false,
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus({ sending: true, error: null, success: false })

		try {
			await emailjs.send(
				"service_gsoks8h", // Replace with your Email.js service ID
				"template_p6mezki", // Replace with your Email.js template ID
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
					to_name: "Prashant", // Your name
					reply_to: formData.email,
				},
				"EAIxjib_1SegYWzqh" // Replace with your Email.js public key
			)

			setStatus({ sending: false, error: null, success: true })
			setFormData({ name: "", email: "", message: "" })

			// Reset success message after 5 seconds
			setTimeout(() => {
				setStatus((prev) => ({ ...prev, success: false }))
			}, 5000)
		} catch (error) {
			setStatus({
				sending: false,
				error: "Failed to send message. Please try again.",
				success: false,
			})
		}
	}

	return (
		<>
			<div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
				<h2 className="text-2xl font-bold mb-6 text-blue-400">
					Send Me a Message
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-gray-400 mb-2">Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full bg-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
						/>
					</div>
					<div>
						<label className="block text-gray-400 mb-2">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full bg-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
						/>
					</div>
					<div>
						<label className="block text-gray-400 mb-2">Message</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full bg-gray-700 rounded-lg p-3 text-white h-32 focus:ring-2 focus:ring-blue-500 outline-none"
						/>
					</div>

					{status.error && (
						<div className="text-red-500 text-sm">{status.error}</div>
					)}

					{status.success && (
						<div className="text-green-500 text-sm">
							Message sent successfully!
						</div>
					)}

					<button
						type="submit"
						disabled={status.sending}
						className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
						{status.sending ? (
							<span>Sending...</span>
						) : (
							<>
								<Send className="w-5 h-5" />
								<span>Send Message</span>
							</>
						)}
					</button>
				</form>
			</div>
		</>
	)
}

export default ContactForm
