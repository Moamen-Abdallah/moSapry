import { motion } from "framer-motion";
import EmailSend from "../components/email/EmailSend";
// import Email from "../components/email/Email"; 
function Contact() {
  return (
    <motion.div
      style={{ height: "87.4vh" , display:"flex" ,justifyContent:"center" ,alignItems:"center" }}
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
        opacity: 0,
      }}

    >
      <EmailSend />
    </motion.div>
  );
}

export default Contact;
