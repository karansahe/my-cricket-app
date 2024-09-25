import { FaPhone, FaSkype, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons

const TopBar = () => {
  // Function to handle redirection to the home page
  const redirectToHome = () => {
    window.location.href = '/'; // Redirects to the home page
  };

  return (
    <div className="bg-pink-700 text-white py-2 flex justify-center items-center gap-8">
      {/* Contact Us (Phone) */}
      <span
        className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
        onClick={redirectToHome}
      >
        <FaPhone /> Contact us: +013(451)236 98
      </span>

      {/* Skype */}
      <span
        className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
        onClick={redirectToHome}
      >
        <FaSkype /> Skype Address: Team.Skype
      </span>

      {/* WhatsApp */}
      <span
        className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
        onClick={redirectToHome}
      >
        <FaWhatsapp /> WhatsApp: +91 1234567890
      </span>

      {/* Facebook */}
      <span
        className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
        onClick={redirectToHome}
      >
        <FaFacebook /> Facebook: kheloCricket.Org
      </span>
    </div>
  );
};

export default TopBar;
