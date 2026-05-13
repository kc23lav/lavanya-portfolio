function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-pink-500/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
        >
          Lavanya
        </a>

        {/* Links */}
        <ul className="flex gap-10 text-white font-medium">

          <li className="hover:text-pink-300 hover:scale-105 transition duration-300 cursor-pointer">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-pink-300 hover:scale-105 transition duration-300 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>

          <li className="hover:text-pink-300 hover:scale-105 transition duration-300 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>

          <li className="hover:text-pink-300 hover:scale-105 transition duration-300 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar