import BGAreasSection from 'app/assets/svg/bgAreasSection.svg'
import TireSvg from 'app/assets/svg/tire.svg'
import NegligentDriverSvg from 'app/assets/svg/negligentDriver.svg'
import CollisionSvg from 'app/assets/svg/collision.svg'
import HitAndRunSvg from 'app/assets/svg/hitAndRun.svg'
import PropertyDamageSvg from 'app/assets/svg/propertyDamage.svg'
import './styles.css'
import Card from './Card'

const AreasSection = () => {
  return (
    <section className="relative" id="areaWeCover">
      <object className="relative w-full">
        <img src={BGAreasSection} style={{ width: '100%' }} />
        <object className="absolute  right-0 top-0 w-full">
          <img src={TireSvg} style={{ width: '100%' }} />
        </object>
      </object>
      <div className="absolute left-20 top-4 sm:left-24  sm:top-14 md:top-20 lg:top-28 xl:top-36">
        <text className="areas-section-title text-sm  sm:text-md md:text-lg lg:text-xl xl:text-[56px]">
          Areas we cover
        </text>
      </div>
      <div className="absolute left-2 top-14 flex flex-row sm:top-32 md:left-4 md:top-48 lg:left-12 lg:top-60 lg:gap-6 xl:left-20 xl:top-72 xl:gap-[55px]">
        <Card svg={NegligentDriverSvg} />
        <Card svg={CollisionSvg} />
        <Card svg={HitAndRunSvg} />
        <Card svg={PropertyDamageSvg} />
      </div>
    </section>
  )
}

export default AreasSection
