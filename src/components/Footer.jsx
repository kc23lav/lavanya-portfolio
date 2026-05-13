import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 px-6 overflow-hidden border-t border-pink-500/10">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left */}
        <div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Lavanya
          </h2>

          <p className="text-gray-400 mt-3">
            Built with React & Coffee ☕
          </p>

        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-3xl">

          {/* GitHub */}
          <a
            href="https://github.com/kc23lav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lavanya-tyagi-0b85a5373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-gray-500 mt-10 text-sm flex items-center justify-center gap-2">

        Made with <FaHeart className="text-pink-400" /> by Lavanya

      </div>

    </footer>
  )
}

export default Footer