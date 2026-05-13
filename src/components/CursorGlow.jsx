import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <div
      className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-[9999] blur-3xl opacity-30 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-transform duration-200"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    />

  )
}

export default CursorGlow