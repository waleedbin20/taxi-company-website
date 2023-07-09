import { Container, Link, Button, lightColors, darkColors } from "react-floating-action-button";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdAdd } from "react-icons/md";

const FloatingButton = () => {
  return (
    <Container>
      <Link
        href="tel:+447894532415"
        tooltip="Contact By phone"
        icon="fa-solid fa-phone"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: lightColors.black }}
      />

      <Link
        href="https://www.facebook.com/people/East-Manchester-Minibus-Service/100094447771778/?mibextid=ZbWKwL"
        target="_blank"
        tooltip="Contact By Facebook"
        icon="fa-brands fa-facebook"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: lightColors.black }}
      />

      <Link
        href="https://www.instagram.com/example"
        tooltip="Contact By Instagram"
        icon="fa-brands fa-instagram"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: lightColors.black }}
      />

      <Link
        href="https://wa.me/+447894532415"
        tooltip="Contact By Whatsapp"
        icon="fa-brands fa-whatsapp"
        className="fab-item btn btn-link btn-lg text-white"
        styles={{ backgroundColor: lightColors.black }}
      />

      <Button
        tooltip="Contact Us!"
        icon="fas fa-plus"
        rotate={true}
        styles={{ backgroundColor: darkColors.blue }}
      />
    </Container>
  );
};

export default FloatingButton;