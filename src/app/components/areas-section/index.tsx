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
    <section className='pb-8 section areas-section' id="areaWeCover">
      <div className="container">
        <h1 className='areas-section-title mt-4 ml-0 mb-8 pb-8' >Areas we cover</h1>
        <div className="area-cards mt-8 d-none d-md-grid">
          <Card svg={NegligentDriverSvg} data_aos='zoom-in' data_delay='200' />
          <Card svg={CollisionSvg}  data_aos='zoom-in' data_delay='400' />
          <Card svg={HitAndRunSvg}  data_aos='zoom-in' data_delay='600'/>
          <Card svg={PropertyDamageSvg}  data_aos='zoom-in' data_delay='800' />
        </div>
        <div className="area-cards mt-8 d-flex d-md-none">
          <Card svg={NegligentDriverSvg} data_aos='' data_delay='' />
          <Card svg={CollisionSvg}  data_aos='' data_delay='' />
          <Card svg={HitAndRunSvg}  data_aos='' data_delay=''/>
          <Card svg={PropertyDamageSvg}  data_aos='' data_delay='' />
        </div>
      </div>
    </section>
  )
}

export default AreasSection
