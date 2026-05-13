import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
          },
        },

        particles: {
          color: {
            value: ["#ff69b4", "#c084fc", "#67e8f9"],
          },

          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },

            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },

            value: 60,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        detectRetina: true,
      }}

      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticlesBackground