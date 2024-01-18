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
    <section className='pb-8' id="areaWeCover">
     <h1 className='areas-section-title mt-4 ml-4' >Areas we cover</h1>
      <div className="area-cards mt-8">
        <Card svg={NegligentDriverSvg} />
        <Card svg={CollisionSvg} />
        <Card svg={HitAndRunSvg} />
        <Card svg={PropertyDamageSvg} />
      </div>
    </section>
  )
}

export default AreasSection
