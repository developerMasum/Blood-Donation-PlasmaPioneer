import assets from "@/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const FooterCompanies = () => {
  return (
    <div className="mb-7 mt-7">
      <Marquee autoFill>
        <div className="flex flex-row justify-between gap-12 items-center">
          <Image src={assets.icons.frame} alt="icon" width={100} height={100} />
          <Image src={assets.icons.msn} alt="icon" width={100} height={100} />
          <Image
            src={assets.icons.selfinds}
            alt="icon"
            width={100}
            height={100}
          />
          <Image src={assets.icons.yahoo} alt="icon" width={100} height={100} />
          <Image
            src={assets.icons.selfinds}
            alt="icon"
            width={100}
            height={100}
          />
          <Image src={assets.icons.frame} alt="icon" width={100} height={100} />
          <Image src={assets.icons.msn} alt="icon" width={100} height={100} />
        </div>
      </Marquee>
    </div>
  );
};

export default FooterCompanies;
