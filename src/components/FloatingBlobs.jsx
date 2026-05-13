import { motion } from "framer-motion"

function FloatingBlobs() {
  return (

    <div className="fixed inset-0 overflow-hidden -z-20">

      {/* Pink Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}

        className="absolute top-10 left-10 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}

        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}

        className="absolute top-[30%] right-10 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -50, 80, 0],
        }}

        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}

        className="absolute bottom-10 left-[30%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"
      />

    </div>
  )
}

export default FloatingBlobs