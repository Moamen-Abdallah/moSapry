import { motion } from "framer-motion"
import Dict from "../components/dict/Dict";

function Projects() {
  return (
    <motion.div
      className="container"
      style={{ zIndex: "100" }}
      initial={{
        x: "-100%",
      }}
      animate={{
        x: "0",
      }}
      transition={{
        duration: 0.6,
      }}
      exit={{
        y: "100%",
      }}
    >
      <Dict />
    </motion.div>
  );
}

export default Projects;