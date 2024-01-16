// import MapSvg from 'app/assets/svg/map.svg'
import ChatSvg from 'app/assets/svg/chat.svg'

import './styles.css'

const Footer = () => {
  return (
    <div
      className="h-full w-full bg-slate-800 px-8 pt-8 sm:px-10 sm:pt-8 md:px-14 md:pt-8 lg:px-28 lg:pt-28 xl:px-28 xl:pt-28"
      id="contactUs"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-6">
          <span className="footer-text-title text-xs sm:text-xs md:text-sm lg:text-[20px] xl:text-[20px]">
            About Us
          </span>
          <div className="w-20 sm:w-32 md:w-52 lg:w-64 xl:w-64">
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Heaven fruitful doesn&apos;t over ;esser days appear creeping
              seasons so beold bearing days open
            </span>

            <div className="flex gap-4 pt-8">
              <img
                src={ChatSvg}
                className="h-[40px] w-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]  xl:h-[70px] xl:w-[70px]"
              />
              <text
                className="footer-text-description text-sm sm:text-sm md:text-sm lg:text-md xl:text-lg"
                style={{ fontWeight: 500, color: 'white', minWidth: 60 }}
              >
                NY Auto <br /> Cases
              </text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="footer-text-title text-xs sm:text-xs md:text-sm lg:text-[20px] xl:text-[20px]">
            Contact Info
          </span>
          <div className=" flex w-20 flex-col gap-y-2 sm:w-32 md:w-52 lg:w-64 xl:w-64 ">
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Address: Your address goes here. your demo address.
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Phone: +8880 44338899
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              info@domain.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="footer-text-title text-xs sm:text-xs md:text-sm lg:text-[20px] xl:text-[20px]">
            Important Link
          </span>
          <div className=" flex w-20 flex-col gap-y-2 sm:w-32 md:w-52 lg:w-64 xl:w-64">
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              WHMCS-bridge
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Search Domain
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              My Account
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Shopping Cart
            </span>
            <span className="footer-text-description text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
              Our Shop
            </span>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-6">
          <span className="footer-text-title">Location Map</span>
          <img src={MapSvg} />
        </div> */}
      </div>

      <hr />

      <text className="footer-copyright-text text-xs md:text-sm lg:text-sm xl:text-sm">
        Copyright &copy;2022 All rights reserved |
      </text>
    </div>
  )
}

export default Footer
