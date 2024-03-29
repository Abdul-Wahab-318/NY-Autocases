import Header from 'app/components/header'
import MainSection from 'app/components/main-section'
import ChatNowSvg from 'app/assets/svg/chatNow.svg'
import HowItWorkSection from 'app/components/how-it-work-section'
import ConnectToLawyerSection from 'app/components/connect-to-lawyer-section'
import AreasSection from 'app/components/areas-section'
import Footer from 'app/components/footer'
import { useState } from 'react'
import FreeConsultationModal from 'app/components/Modals'
import {isMobile} from 'react-device-detect';
import '../../styles.css'
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Header />
      <MainSection  openFormModal={
        () => {
          if(isMobile){
            // var address="//open?addresses=+16467526097,+12129573634"
            var address="+16467526097"
            const userAgent = navigator.userAgent || navigator.vendor ;
            if (/android/i.test(userAgent)) { 
                window.open(`sms:${address}?body=Hello`);

            } else if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent)) {

                window.open(`sms:${address}&body=Hello`);
            }
            return
          }
           
           setShowModal(!showModal)
        }
        
        }/>
      <HowItWorkSection />
      <ConnectToLawyerSection openFormModal={
        () => {
          if(isMobile){
            // var address="//open?addresses=+16467526097,+12129573634"
            var address="+16467526097"
            const userAgent = navigator.userAgent || navigator.vendor ;
            if (/android/i.test(userAgent)) { 
                window.open(`sms:${address}?body=Hello`);

            } else if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent)) {

                window.open(`sms:${address}&body=Hello`);
            }
            return
          }
           
           setShowModal(!showModal)
        }
        
        } />
      <AreasSection />
      <Footer />

      <div
        className="fixed bottom-[65px] right-[67px] z-50 invisible"
        onClick={() => setShowModal(!showModal)}
      >
        <img
          src={ChatNowSvg}
          className="h-[60px] w-[60px] cursor-pointer sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] xl:h-[95px] xl:w-[95px]"
        />
      </div>

      {showModal ? (
        <FreeConsultationModal setShowModal={(value) => setShowModal(value)} />
      ) : null}
    </div>
  )
}

export default LandingPage
