import { motion } from "framer-motion"

import {
  FaJava,
  FaPython,
  FaReact,
  FaFire,
} from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import lavanya from "../assets/lavanya.png"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-8 pt-24"
    >

      {/* Glow Background */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Small Tag */}
          <div className="mb-6">
            <span className="px-5 py-2 rounded-full border border-pink-400/30 bg-pink-400/10 text-pink-300 text-sm tracking-[0.2em] uppercase backdrop-blur-md">
              AI • Backend • Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(236,72,153,0.7)]">
              Lavanya
            </span>

          </h1>

          {/* Paragraph */}
         <div className="mt-8">

  <TypeAnimation
    sequence={[
      "Java Backend Developer",
      2000,
      "AI/ML Enthusiast",
      2000,
      "Problem Solver",
      2000,
      "Building Intelligent Systems",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
  />

  <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
    Passionate about creating elegant backend systems,
    AI-driven applications, and modern software experiences.
  </p>

</div>
          {/* Buttons */}
          <div className="flex gap-6 mt-10 flex-wrap">

            {/* Projects Button */}
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-black font-semibold rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition duration-300"
            >
              Projects
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/kc23lav"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-pink-400 text-pink-300 rounded-2xl hover:bg-pink-400 hover:text-black hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition duration-300"
            >
              GitHub
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Speech Bubble */}
          <div className="absolute -top-10 right-10 bg-white/10 border border-pink-400/20 backdrop-blur-md px-6 py-3 rounded-2xl text-pink-200 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
            ✨ Hey, it's me Lavanya
          </div>

          {/* Image Glow */}
          <div className="absolute w-[340px] h-[340px] bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>

           
           {/* Floating Icons */}

<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 3 }}
  className="absolute -left-10 top-10 text-5xl text-orange-400 bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(255,165,0,0.4)]"
>
  <FaJava />
</motion.div>

<motion.div
  animate={{ y: [0, 15, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="absolute -right-8 top-20 text-5xl text-cyan-400 bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.4)]"
>
  <FaReact />
</motion.div>

<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
  className="absolute left-0 bottom-10 text-5xl text-yellow-300 bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(255,255,0,0.4)]"
>
  <FaPython />
</motion.div>

<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ repeat: Infinity, duration: 4.5 }}
  className="absolute right-0 bottom-0 text-5xl text-pink-400 bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.4)]"
>
  <FaFire />
</motion.div>
          {/* Image */}
          <img
            src={lavanya}
            alt="Lavanya"
            className="relative w-[320px] h-[320px] object-cover rounded-full border-4 border-pink-400/30 shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-500"
          />

        </motion.div>

      </div>

{/* Scroll Indicator */}

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
>

  <span className="text-sm tracking-[0.3em] uppercase mb-3">
    Scroll
  </span>

  <div className="w-[2px] h-14 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-full"></div>

</motion.div>

    </section>
  )
}

export default Hero