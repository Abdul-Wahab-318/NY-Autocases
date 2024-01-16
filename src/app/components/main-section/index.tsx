import BannerSvg from 'app/assets/svg/banner.svg'
import BGWallpaperSvg from 'app/assets/svg/bg-wallpaper.svg'
import './styles.css'

const MainSection = () => {
  return (
    <div
      id="mainSection"
      className="relative w-full overflow-hidden lg:mt-[22px] xl:mt-28"
    >
      <img
        src={BGWallpaperSvg}
        style={{
          height: '100%',
          position: 'absolute'
        }}
      />
      <img src={BannerSvg} style={{ width: '100%' }} />

      <div className="absolute left-8 top-24 md:left-[76px] md:top-36 lg:left-[86px] lg:top-40 xl:left-[96px] xl:top-44">
        <span className="banner-title text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl ">
          Your road to justice.
        </span>
        <span className="banner-text w-[120px] pt-1 text-[8px] sm:w-[190px] sm:text-xs sm:leading-4 md:w-[270px] md:text-md md:leading-7 lg:w-[445px] lg:text-lg lg:leading-8 xl:w-[445px] xl:text-[30px] xl:leading-9">
          ACCIDENTS HAPPEN. LET US minimize your impact.
        </span>

        <div className="absolute left-0 top-16 sm:top-24 sm:block md:hidden lg:hidden xl:hidden">
          <div className="left-8 flex flex-col gap-2">
            <span className="nav-button-sm group w-36 cursor-pointer rounded-full bg-white px-4 py-1 text-center transition delay-75  ease-in hover:bg-[#2b84de]  sm:w-44 sm:py-2 ">
              <a
                href="#mainSection"
                className="text-xs text-[#2b84de] transition delay-75 ease-in  group-hover:text-white md:text-sm  lg:text-md xl:text-lg "
              >
                HOW IT WORKS
              </a>
            </span>
            <span className="nav-button-sm group w-36 cursor-pointer rounded-full bg-white px-4  py-1 text-center  transition delay-75 ease-in hover:bg-[#2b84de] sm:w-44 sm:py-2">
              <a
                href="#HowItWorkSection"
                className="text-xs text-[#2b84de] transition delay-75
                ease-in  group-hover:text-white md:text-sm  lg:text-md xl:text-lg 
                "
              >
                CHAT WITH A LAWYER
              </a>
            </span>
            <span className="nav-button-sm group w-36  cursor-pointer rounded-full  bg-white px-4 py-1 text-center text-xs transition delay-75 ease-in hover:bg-[#2b84de] sm:w-44  sm:py-2">
              <a
                href="#areaWeCover"
                className="text-xs text-[#2b84de] transition delay-75 ease-in group-hover:text-white  md:text-sm lg:text-md   xl:text-lg"
              >
                AREAS WE COVER
              </a>
            </span>
            <span className="nav-button-sm group w-36 cursor-pointer rounded-full  bg-white px-4  py-1 text-center transition delay-75 ease-in hover:bg-[#2b84de] sm:w-44  sm:py-2">
              <a
                href="#contactUs"
                className="text-xs text-[#2b84de] transition delay-75 ease-in  group-hover:text-white md:text-sm  lg:text-md xl:text-lg "
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

export default MainSection
