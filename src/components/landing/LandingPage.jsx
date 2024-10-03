import { Link } from "react-router-dom";
import logo1 from "../../assets/main-slider-1-1-1.jpeg"
 

const LandingPage = () => {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[744px] relative">
      <img
        src={logo1}
        alt="BgImage"
        className="w-[1440px] h-[744px] absolute left-[-1px] top-[-1px] object-cover"
      />
      <div className="flex flex-col justify-start items-start w-[486px] h-[440px] absolute left-[136px] top-[92px] gap-8">
        <p className="flex-grow-0 flex-shrink-0 w-[579px] text-base font-semibold text-left uppercase text-white">
          WELCOME TO Agricultural Products Management System.
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[540px] h-[200px] text-[60px] font-semibold text-left uppercase text-white gap-8">
          AgriMonitoring System
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[547px] pt-[20px] text-base font-medium text-left text-white gap-8">
          Empowering Rural Dreams, Nurturing Agricultural Growth – AgriMonitoring
          System is a Hub that cultivates prosperity from&nbsp;the&nbsp;roots&nbsp;up.
        </p>
      </div>
      <svg
        width={103}
        height={95}
        viewBox="0 0 103 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[102.5px] h-[94.5px]"
        preserveAspectRatio="none"
      >
        <path d="M10 10.5L0 18.5L13 24.5L10 10.5Z" fill="#F7C35F" />
        <path d="M33.5 24.5L40 0L49.5 8.5L33.5 24.5Z" fill="#F7C35F" />
        <path d="M37 46L80 6L95 44L37 46Z" fill="#F7C35F" />
        <path d="M65 62.5L102.5 65L93.5 75.5L65 62.5Z" fill="#F7C35F" />
        <path d="M53 77.5L61.5 94.5L65 87.5L53 77.5Z" fill="#F7C35F" />
      </svg>
      <div className="w-[172px] h-14 absolute left-[136px] top-[508px]">
        <div className="flex justify-center items-center w-[172px] h-14 absolute left-0 top-0 gap-3 px-4 py-3 rounded-[5px] bg-[#db971a]">
          <Link
            to="/login"
            className="flex-grow-0 flex-shrink-0 w-[126px] text-base font-semibold text-left text-white"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-[172px] h-14 absolute left-[345px] top-[508px] gap-3 px-4 py-3 rounded-[5px] bg-[#db971a]">
        <Link
          to="/register"
          className="flex-grow-0 flex-shrink-0 w-[126px] text-base font-semibold text-left text-white"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;