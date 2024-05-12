import { FaLinkedin, FaBehanceSquare ,FaWhatsapp  } from "react-icons/fa";
function Icon() {
  return (
    <>

      <a href="https://www.behance.net/mohamedsabri13" target="_blank">
        <FaBehanceSquare style={{ color: "#191919", fontSize: "34px" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/mhamed-sabry-007b361a3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        <FaLinkedin style={{ color: "#0a66c2", fontSize: "34px" }} />
      </a>
      <a href="https://wa.me/+2001004368365" target="_blank">
        <FaWhatsapp style={{ color: "green", fontSize: "34px" }} />
      </a>
    </>
  );
}

export default Icon;
