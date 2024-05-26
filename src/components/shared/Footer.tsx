import Image from "next/image";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import twitterIcon from "@/assets/icons/twitter.png";
import linkedIcon from "@/assets/icons/linkedin.png";
import charity from "@/assets/icons/charity-icon.png";
import FooterCompanies from "./FooterCompanies";
import Link from "next/link";
import assets from "@/assets";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <FooterCompanies />
      <div className="bg-red-300 py-5">
        <div className=" mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              src={assets.icons.logo}
              alt="logo"
              width={100}
              height={100}
              // className="h-6 w-6"
            />
            <div className="hidden md:flex mt-0 mb-8">
              <Link href="/" className="flex items-center gap-5 font-semibold">
                <p className="uppercase flex items-center gap-2">
                  <span className="text-red-600 font-bold">Plasma</span>
                  Pioneers
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center py-3">
            <Image className="cursor-pointer" src={facebookIcon} width={30} height={30} alt="facebook" />
            <Image className="cursor-pointer" src={instagramIcon} width={30} height={30} alt="instagram" />
            <Image className="cursor-pointer" src={twitterIcon} width={30} height={30} alt="twitter" />
            <Image className="cursor-pointer" src={linkedIcon} width={30} height={30} alt="linkedin" />
          </div>

          <div className="flex flex-row gap-2 justify-center items-center py-3">
            <p className="text-white cursor-pointer">Privacy Policy!</p>
            <p className="text-white cursor-pointer">Terms & Conditions</p>
            <p className="text-white cursor-pointer">Supports</p>
            <p className="text-white cursor-pointer">About Us</p>
          </div>

          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}  Plasma Pioneers. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
