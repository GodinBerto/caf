"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Create a motion-capable Image component
const MotionImage = motion(Image);

const LogoCarousel = () => {
  const logos = [
    "/logos/Gemini New 2025.png",
    "/logos/Gemini New 2025.png",
    "/logos/Gemini New 2025.png",
    "/logos/Gemini New 2025.png",
    "/logos/Gemini New 2025.png",
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden backdrop-blur-sm mt-4">
      <motion.div
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%",
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 15, // Reduced from 25 to 15 seconds
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          },
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem",
        }}
      >
        {extendedLogos.map((logo, index) => (
          <MotionImage
            key={`logo-${index}`}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            width={250} // ✅ required in next/image
            height={40} // ✅ required in next/image
            className=" object-contain"
            initial={{ opacity: 0.5 }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
