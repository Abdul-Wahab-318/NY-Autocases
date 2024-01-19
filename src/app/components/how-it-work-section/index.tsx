import './styles.css'
import how_it_works1 from 'app/assets/svg/how-it-works-1.svg' ; 
import how_it_works2 from 'app/assets/svg/how-it-works-2.svg' ; 
import how_it_works3 from 'app/assets/svg/how-it-works-3.svg' ; 
import bottom_circle from 'app/assets/svg/bottom circle.svg' ;
import top_circle from 'app/assets/svg/top circle.svg' ;

const HowItWorkSection = () => {
  return (
    
    <div id='mainSection' className="how-it-works-section section relative container" style={{minHeight: '70vh'}} >
    <div className="">
      <h2 className="section-title">
          How does it work?
      </h2>
      <div className=" how-it-works-cards-wrapper d-flex  mt-5 " style={{ height : 'auto'}}>
      
        <div className="" style={{backgroundColor: 'white', marginBottom: '5rem'}}>
            <div id="flexcon" className="card-img-top">
                <img src={how_it_works1} width={'250px'} alt="" />
                <div className="  items-center justify-center"><span className="section-number">01.<br /></span><span className="section-text text-[8px] sm:text-sm md:text-sm lg:text-md xl:text-[27px]">Click<b> chat now.</b></span></div></div>
        </div>
        <div className="" style={{backgroundColor: 'white', marginBottom: '5rem'}}>
            <div id="flexcon" className="card-img-top">
              <img src={how_it_works2} width={'250px'}  alt="" />
                <div className="  items-center justify-center"><span className="section-number block text-[12px] sm:text-md md:text-lg lg:text-xl xl:text-[48px]">02. <br /></span><span className="section-text text-[8px] sm:text-sm md:text-sm lg:text-md xl:text-[27px]">Choose the area of law.</span></div></div>

        </div>
        <div className="" style={{backgroundColor: 'white', marginBottom: '5rem'}}>
            <div id="flexcon" className="card-img-top">
              <img src={how_it_works3} width={'250px'}  alt="" />
              <div className="  items-center justify-center"><p className="section-number block text-[12px] sm:text-md md:text-lg lg:text-xl xl:text-[48px]">03. <br /></p><span className="section-text text-[8px] sm:text-sm md:text-sm lg:text-md xl:text-[27px]">Get connected to a lawyer.</span></div></div>

        </div>
    
      </div>
    </div>
    <div className="floating-circle-bottom">
      <img src={bottom_circle} alt="" />
    </div>
    <div className="floating-circle-top">
      <img src={top_circle} alt="" />
    </div>
    </div>
  
  )
}

export default HowItWorkSection
