// tailwind.config.js
module.exports = {
    content: ["./index.html", "./script.js"],
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.5s ease-in-out",
          pulseOnce: "pulse 1s ease-in-out 1",
          shake: "shake 0.4s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "scale(0.95)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
          shake: {
            "0%, 100%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-5px)" },
            "75%": { transform: "translateX(5px)" },
          },
        },
      },
    },
    plugins: [],
  };
  