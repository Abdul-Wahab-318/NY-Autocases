import React from "react";
import banner from "./../../assets/images/banner.png" ;
import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ConnectToLawyerSectionProps {
  openFormModal: () => void
 
}

const MainSection : React.FC<ConnectToLawyerSectionProps> = ({
  openFormModal
}) => {
  
  React.useEffect(() => {
    AOS.init({once: true});
  }, [])

  return (
    <>
      <div className="container-fluid px-0 banner-section">

        <div className="row gx-0">

          <div className="position-relative">
            <div className="banner-container">
              <img src={banner} width={'100%'} alt="" />
              <div className="banner-content">
                <div className="container">                  
                <h1 data-aos={"fade-up"} data-aos-duration="1000" className="">Your road to justice</h1>
                <h4 data-aos={"fade-up"} data-aos-duration="1000" data-aos-delay="200">Accidents happen. Let us <br /> minmize your impact</h4>
                <button className="cta-btn d-block d-md-none rounded-pill py-3 px-4  mt-5" data-aos={"fade-up"} data-aos-delay="400" data-aos-duration="1000" onClick={openFormModal}>Contact Us</button>
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
