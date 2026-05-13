import { motion } from "framer-motion"

import {
  FaJava,
  FaPython,
  FaGithub,
  FaFire,
} from "react-icons/fa"

import {
  SiCplusplus,
  SiFirebase,
} from "react-icons/si"

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
    color: "from-orange-400 to-red-500",
  },

  {
    name: "Python",
    icon: <FaPython />,
    color: "from-yellow-300 to-blue-400",
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "from-blue-400 to-cyan-400",
  },

  {
    name: "DSA",
    icon: <FaFire />,
    color: "from-pink-400 to-purple-500",
  },

  {
    name: "AI/ML",
    icon: <FaFire />,
    color: "from-purple-400 to-pink-500",
  },

  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "from-yellow-400 to-orange-500",
  },

  {
    name: "Backend",
    icon: <FaJava />,
    color: "from-cyan-400 to-blue-500",
  },

  {
    name: "Git/GitHub",
    icon: <FaGithub />,
    color: "from-gray-300 to-gray-500",
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24"
        >
          My{" "}

          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>

        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -10,
              }}
              className="group relative bg-white/5 border border-pink-500/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden hover:border-pink-400 hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] transition duration-300"
            >

              {/* Hover Gradient Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${skill.color}`}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">

                {/* Icon */}
                <div className={`text-5xl mb-6 bg-gradient-to-r ${skill.color} p-5 rounded-2xl text-white shadow-[0_0_30px_rgba(236,72,153,0.2)]`}>
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills