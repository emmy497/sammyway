import { FaGraduationCap } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    // <div className="">
    //   <div><FaGraduationCap color="#a569bd" /></div>
    //   <div className="text-[#a569bd]">SAMIWAY</div>
    // </div>
    <>
      <div>
        <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
      </div>
    </>
  );
}

export default Logo;
