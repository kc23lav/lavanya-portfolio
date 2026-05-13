import { motion } from "framer-motion"

import music from "../assets/music.png"
import smartcity from "../assets/smartcity.png"
import delivery from "../assets/delivery.png"
import chatapp from "../assets/chatapp.png"

const projects = [
  {
    title: "AI Music Recommendation System",
    description:
      "An intelligent recommendation system using machine learning algorithms to suggest personalized music.",
    tech: "Python • Flask • ML • Pandas",
    image: music,
    github: "https://github.com/kc23lav/AI-Music-Recommendation-System",
  },

  {
    title: "Smart City Emergency Response",
    description:
      "Graph and DSU based emergency optimization system for efficient city emergency handling.",
    tech: "C++ • Graphs • DSU • Optimization",
    image: smartcity,
    github: "https://github.com/kc23lav/Smart-City-Emergency-Response-System",
  },

  {
    title: "Smart Delivery Optimization",
    description:
      "Delivery route optimization system with admin and delivery management dashboard.",
    tech: "React • Node.js • Optimization",
    image: delivery,
    github: "https://github.com/kc23lav/SmartDeliveryOptimization",
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A modern real-time chat platform with authentication and live messaging.",
    tech: "React • Firebase • Real-time DB",
    image: chatapp,
    github: "https://github.com/kc23lav/RealtimeChatApplication",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24"
        >

          Featured{" "}

          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>

        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                y: -8,
              }}
              className="group bg-white/5 border border-pink-500/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-pink-400 hover:shadow-[0_0_50px_rgba(236,72,153,0.3)] transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-pink-300 mb-8">
                  {project.tech}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition duration-300"
                  >
                    View Project
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects