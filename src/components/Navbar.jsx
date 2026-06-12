import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
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
        {/* Desktop Menu */}
<ul className="hidden md:flex gap-10 text-white font-medium">

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
 
<button
  className="md:hidden text-white text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

      </div>

{menuOpen && (
  <div className="md:hidden bg-black/95 backdrop-blur-lg">
    <ul className="flex flex-col items-center gap-6 py-8 text-white font-medium">

      <li>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
      </li>

      <li>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </li>

    </ul>
  </div>
)}
    </nav>
  )
}

export default Navbar