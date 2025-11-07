import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <hr className="h-0.5 text-gray-600 bg-gray-700 my-3 w-full" />
      <div className="flex flex-col sm:flex-row justify-between items-center my-6">
        <div className="flex  gap-2 items-center justify-center">
          <img src={assets.logo} alt="" />
          <p>
            Blotter <span className="font-bold text-xl">Blog</span>{" "}
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center  gap-3">
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li> copyright @Blotter </li>
        </ul>
        </div>
     
    </>
  );
};
export default Footer;