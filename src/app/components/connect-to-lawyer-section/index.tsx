import React from 'react'
import BackgroundImage from '../../assets/svg/bgLawyerSection.svg'
import FgImage from '../../assets/svg/lawyers.png'
import Lawer from '../../assets/svg/lawyers.png'
import Button from './Button'
import ChatNowSvg from 'app/assets/svg/chatNow.svg'
// import CallSvg from 'app/assets/svg/call.svg'
// import ContactSvg from 'app/assets/svg/contact.svg'
import './styles.css'

interface ConnectToLawyerSectionProps {
  openFormModal: () => void
 
}

const ConnectToLawyerSection: React.FC<ConnectToLawyerSectionProps> = ({
  openFormModal
}) => {
  return (
    <section className="section connect-section" id='HowItWorkSection'>
      <div className="container">
        <div className="flex relative">
          <div className="laywer-relative">
            <div className="lawyer-section-title ">
              <h1 className="lawyer-text text-sm sm:text-md md:text-lg lg:text-xl xl:text-[56px]">
                Connect to a lawyer
              </h1>
              <div className="d-block d-md-none">
                <Button
                    text="START CHATTING"
                    icon={ChatNowSvg}
                    onClick={openFormModal}
                  />
              </div>
              <div className="d-none d-md-block">
                <Button
                    text="CONTACT US"
                    icon={ChatNowSvg}
                    onClick={openFormModal}
                  />
              </div>
            </div>
          </div>
          <div className="lawer-img">
            <img src={Lawer} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectToLawyerSection
