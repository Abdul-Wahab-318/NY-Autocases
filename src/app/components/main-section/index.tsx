import BannerSvg from 'app/assets/svg/banner.svg'
import BGWallpaperSvg from 'app/assets/svg/bg-wallpaper.svg'
import video from './Video.mp4'
import './styles.css'

const MainSection = () => {
  return (
    <>
      <div className="container-fluid px-0">

        <div className="row gx-0">

          <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
            <div className="video-container">
              <video src={video} loop playsInline autoPlay={true}></video>

            </div>
            <div className="card-img-overlay d-flex flex-column justify-content-center align-content-center px-0"
              style={{ backgroundColor: 'rgba(0, 0, 100, 0.25)', width: '100%' }}>


              <div className="row gx-0">
                <div className="col-md-12">

                  <div className="container">
                    <div className="d-flex justify-content-start align-content-start mb-500px">
                      <div className="fw-bolder"><p className=" display-6 " ><h1 style={{ color: 'white', fontSize: '4rem' }}>Your Road To Justice</h1></p></div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-start align-content-start">
                      <div className="row">
                        <div className="col-md-7 col-sm-8">
                          <div className="fw-bold"><h3 style={{ color: 'white', fontSize: '2rem' }}>ACCIDENT HAPPEN. LET US MINIMIZE YOUR IMPACT.</h3></div>
                          <div className="mt-5 left-0 top-16 sm:top-24 sm:block md:hidden lg:hidden xl:hidden">
          <div className="left-8 flex flex-col gap-2">
            <span className="nav-button-sm group cursor-pointer rounded-full bg-white px-4 py-2 text-center transition delay-75  ease-in hover:bg-[#2b84de]  sm:w-44 sm:py-2 ">
              <a
                href="#mainSection"
                className="text-xs text-[#2b84de] transition delay-75 ease-in  group-hover:text-white md:text-sm  lg:text-md xl:text-lg "
              >
                HOW IT WORKS
              </a>
            </span>
            <span className="nav-button-sm group cursor-pointer rounded-full bg-white px-4  py-2 text-center  transition delay-75 ease-in hover:bg-[#2b84de] sm:w-44 sm:py-2">
              <a
                href="#HowItWorkSection"
                className="text-xs text-[#2b84de] transition delay-75
                ease-in  group-hover:text-white md:text-sm  lg:text-md xl:text-lg 
                "
              >
                CHAT LAWYER
              </a>
            </span>
            <span className="nav-button-sm group  cursor-pointer rounded-full  bg-white px-4 py-2 text-center text-xs transition delay-75 ease-in hover:bg-[#2b84de] sm:w-44  sm:py-2">
              <a
                href="#areaWeCover"
                className="text-xs text-[#2b84de] transition delay-75 ease-in group-hover:text-white  md:text-sm lg:text-md   xl:text-lg"
              >
                AREAS WE COVER
              </a>
            </span>
        
          </div>
        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainSection
