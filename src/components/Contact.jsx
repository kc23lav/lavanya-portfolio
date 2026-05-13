import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >

          Get In{" "}

          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>

        </motion.h2>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/5 border border-pink-500/10 rounded-3xl p-10 backdrop-blur-md hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition duration-300"
        >

          <p className="text-gray-300 text-lg text-center leading-relaxed mb-12">
            Whether it's collaboration, internships,
            projects, or just tech conversations —
            feel free to connect with me ✨
          </p>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">

            {/* Email */}
            <a
              href="mailto:tyagilavanya816@gmail.com"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition duration-300 text-center"
            >
              Email Me
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kc23lav"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-black hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition duration-300 text-center"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lavanya-tyagi-0b85a5373"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 text-center"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact