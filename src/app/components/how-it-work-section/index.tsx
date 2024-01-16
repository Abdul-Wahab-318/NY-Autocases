import HowItWorkSvg1 from 'app/assets/svg/howItWork-1'
import Avatar from './Avatar'
import './styles.css'
import HowItWorkSvg2 from 'app/assets/svg/howItWork-2'
import HowItWorkSvg3 from 'app/assets/svg/howItWork-3'

const HowItWorkSection = () => {
  return (
    <div
      className="px-[40px] sm:px-[10px] md:px-[80px] lg:px-[100px] xl:px-[120px] pb-[50px]"
      id="HowItWorkSection"
    >
      <div className="pb-[38px] pt-[40px] sm:pb-[38px] sm:pt-[40px] md:pb-[44px] md:pt-[80px] lg:pb-[48px] lg:pt-[100px] xl:pb-[54px] xl:pt-[121px]">
        <span className="section-title sm:text-md md:text-lg lg:text-xl xl:text-[56px]">
          How does it work?
        </span>
      </div>
      <div className="container grid auto-cols-[8rem] grid-flow-col md:gap-30 sm:gap-0 overflow-x-scroll no-scrollbar">
        <Avatar
          AvatarSrc={HowItWorkSvg1}
          sectionNumber="01."
          sectionText="Click"
          sectionSubText=" chat now."
        />
        <Avatar
          AvatarSrc={HowItWorkSvg2}
          sectionNumber="02."
          sectionText="choose the area of law."
        />
        <Avatar
          AvatarSrc={HowItWorkSvg3}
          sectionNumber="03."
          sectionText="Get connected to a lawyer."
        />
      </div>
    </div>
  )
}

export default HowItWorkSection
