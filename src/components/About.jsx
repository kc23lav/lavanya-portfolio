import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24"
        >
          About{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 border border-pink-500/10 rounded-3xl p-10 backdrop-blur-md hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition duration-300"
          >

            <h3 className="text-3xl font-bold mb-6 text-pink-300">
              Who am I?
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Lavanya, a B.Tech CSE student passionate about
              backend development, AI/ML systems, and solving
              real-world problems through technology.

              I enjoy building intelligent systems,
              optimization projects, scalable backend
              solutions, and modern software applications
              using Java, Python, C++, and web technologies.

              My interests include DSA, recommendation systems,
              smart city solutions, system design, and AI-driven
              applications.
            </p>

            {/* Current Focus */}
            <div className="mt-10">

              <h4 className="text-2xl font-semibold mb-5 text-purple-300">
                Currently Exploring
              </h4>

              <div className="flex flex-wrap gap-4">

                <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200">
                  AI/ML
                </span>

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-200">
                  Backend Systems and Java 
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200">
                  DSA and problem solving 
                </span>

                <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200">
                  New ideas and techs 
                </span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            {/* Education Card */}
            <div className="bg-white/5 border border-purple-500/10 rounded-3xl p-8 backdrop-blur-md hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition duration-300">

              <h3 className="text-3xl font-bold mb-8 text-purple-300">
                Education
              </h3>

              <div className="space-y-6">

                <div className="border-l-2 border-pink-400 pl-5">
                  <h4 className="text-xl font-semibold text-white">
                    B.Tech CSE
                  </h4>

                  <p className="text-gray-400">
                    JIIT • 2024 – 2028
                  </p>
                </div>

                <div className="border-l-2 border-cyan-400 pl-5">
                  <h4 className="text-xl font-semibold text-white">
                    Class 12th
                  </h4>

                  <p className="text-gray-400">
                    97%
                  </p>
                </div>

                <div className="border-l-2 border-pink-400 pl-5">
                  <h4 className="text-xl font-semibold text-white">
                    Class 10th
                  </h4>

                  <p className="text-gray-400">
                    98%
                  </p>
                </div>

              </div>

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-pink-500/10 rounded-2xl p-6 text-center backdrop-blur-md hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition duration-300">

                <h3 className="text-3xl font-bold text-pink-300">
                  4+
                </h3>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>

              </div>

              <div className="bg-white/5 border border-cyan-500/10 rounded-2xl p-6 text-center backdrop-blur-md hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300">

               <h3 className="text-2xl font-bold text-cyan-300">
  Focus Area
</h3>

               <p className="text-gray-400 mt-2">
  AI • Java • DSA
</p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About