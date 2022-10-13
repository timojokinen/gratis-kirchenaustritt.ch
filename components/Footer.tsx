import { FaChurch } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black w-full h-[300px] mt-24">
      <Container className="relative">
        <div className="absolute top-3 right-4 transform -translate-y-full">
          <FaChurch className="text-black text-8xl"></FaChurch>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
