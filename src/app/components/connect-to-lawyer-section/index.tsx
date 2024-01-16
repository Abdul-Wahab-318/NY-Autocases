import React from 'react'
import BackgroundImage from '../../assets/svg/bgLawyerSection.svg'
import FgImage from '../../assets/svg/fgLawyerSection.svg'
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
    <section className="w-full pt-[0px]">
      <div className="relative">
        <img src={BackgroundImage} className="w-full" alt="Background" />
        <div className="absolute top-0 w-full opacity-45">
          <img src={FgImage} className="w-full" alt="Foreground" />
        </div>
        <object className="absolute bottom-0 right-6 sm:right-12 md:right-16 lg:right-24 xl:right-28">
          <img
            src={'lawyers.png'}
            alt="Lawyers"
            className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[530px] xl:w-[555px]"
          />
          {/* <LawyersSvg /> */}
        </object>

        <div className="lawyer-section-title absolute left-8  top-6 sm:top-[30px] md:top-[64px] lg:top-[100px] xl:top-[180px]">
          {/* className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" */}
          <text className="lawyer-text text-sm sm:text-md md:text-lg lg:text-xl xl:text-[56px]">
            Connect to a lawyer
          </text>
        </div>

        <div className="absolute left-7 top-24 grid gap-y-8 sm:left-10 sm:top-36 md:top-[220px] lg:top-[280px] xl:top-[300px]">
          <Button
            text="START CHATTING"
            icon={ChatNowSvg}
            onClick={ openFormModal}
          />
          {/* <Button
            text="+1 111 222 4333"
            icon={CallSvg}
            backgroundColor="white"
            textColor="#2C85DE"
          /> */}
          {/* 
          <Button text="DROP US A LINE" icon={ContactSvg} /> */}
        </div>
      </div>
    </section>
  )
}

export default ConnectToLawyerSection
