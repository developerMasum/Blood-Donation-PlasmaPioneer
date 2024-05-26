import {  Phone, Facebook, Twitter, Instagram } from "lucide-react"; // Import icons from Lucide

const AboutUsPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <p className="text-lg">
          Our mission is to connect blood donors with individuals in need,
          saving lives and making a positive impact on our communities. Through
          our platform, we aim to streamline the blood donation process and
          ensure that every donation counts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="flex items-center space-x-4">
          {/* Email */}
          {/* <div className="flex items-center space-x-2">
            <Email size={24} className="text-gray-600" />
            <span>info@blooddonation.com</span>
          </div> */}

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Phone size={24} className="text-gray-600" />
            <span>+123 456 7890</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
