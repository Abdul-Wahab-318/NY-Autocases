import { ChatSvg } from 'app/assets/svg/chat'
import './styles.css'

const Header = () => {
  return (
    <div
      className="fixed top-0 w-full bg-white px-2 py-[8px] sm:px-4 sm:py-[14px] md:px-8 md:py-[18px] lg:px-16 lg:py-[22px] xl:px-24 xl:py-[28px]"
      style={{ zIndex: 1 }}
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-[4px] sm:gap-[12px]">
          <ChatSvg />
          <span className="hero-title cursor-pointer justify-center text-center text-xs md:text-md lg:text-lg xl:text-xl">
            NY Auto Cases
          </span>
        </div>

        <div className="hidden md:flex">
          <div className="flex justify-center gap-8 px-[6px] py-[7px] ">
            <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
              <a
                href="#mainSection"
                className="px-2 md:text-sm lg:text-md
                
                xl:text-lg"
              >
                HOW IT WORKS
              </a>
            </span>
            <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
              <a
                href="#HowItWorkSection"
                className="px-2 md:text-sm lg:text-md 
                
                xl:text-lg"
              >
                CHAT WITH A LAWYER
              </a>
            </span>
            <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
              <a
                href="#areaWeCover"
                className="px-2 md:text-sm lg:text-md
                
                xl:text-lg"
              >
                AREAS WE COVER
              </a>
            </span>
            <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
              <a
                href="#contactUs"
                className="px-2 md:text-sm lg:text-md 
                xl:text-lg"
              >
                CONTACT US
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
