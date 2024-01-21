import React from "react";
import banner from "./../../assets/images/banner.png" ;
import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from "./video-2.mp4"

interface ConnectToLawyerSectionProps {
  openFormModal: () => void
 
}

const MainSection : React.FC<ConnectToLawyerSectionProps> = ({
  openFormModal
}) => {
  
  React.useEffect(() => {
    AOS.init({once: true });
  }, [])

  return (
    <>
      <section className="container-fluid px-0 banner-section">

        <div className="row gx-0">

          <div className="position-relative">
            <div className="banner-container">
              {/* <img src={banner} width={'100%'} alt="" /> */}
              <div className="video-banner">
                <video autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-banner-overlay"></div>
              </div>
              <div className="banner-content">
                <div className="container">                  
                <h1 data-aos={"fade-up"} data-aos-duration="1500" data-aos-delay="500" className="">Your road to justice</h1>
                <h4 data-aos={"fade-up"} style={{lineHeight : 1.6}} data-aos-duration="1500" data-aos-delay="500">We will fight to get you the compensation you deserve</h4>
                <a href="#HowItWorkSection" className="cta-btn d-none d-md-inline-block rounded-pill py-3 px-4  mt-5 text-center" data-aos={"fade-up"} data-aos-delay="700" data-aos-duration="1500">Contact Us</a>
                <div>
                  <a href="#HowItWorkSection" className="cta-btn d-inline-block d-md-none rounded-pill py-3 px-4  mt-5 text-center" data-aos={"fade-up"} data-aos-delay="700" data-aos-duration="1500">Contact Us</a>
                  <br />
                  <a href="#mainSection" className="cta-btn d-inline-block d-md-none rounded-pill py-3 px-4  mt-2 text-center" data-aos={"fade-up"} data-aos-delay="700" data-aos-duration="1500">How does it work?</a>
                  <br />
                  <a href="#areaWeCover" className="cta-btn d-inline-block d-md-none rounded-pill py-3 px-4  mt-2 text-center" data-aos={"fade-up"} data-aos-delay="700" data-aos-duration="1500" >Areas we cover</a>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default MainSection
