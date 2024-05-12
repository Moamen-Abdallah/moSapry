import Advantage from "../components/advantage/Advantage";
import Hero from "../components/main/Hero";
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: "0",
      }}
      transition={{
        duration: 0.6,
      }}
      exit={{
        y: "100vh",
        scale:".8"
      }}
    >
      <Hero />
      <Advantage />
    </motion.div>
  );
}

export default Home