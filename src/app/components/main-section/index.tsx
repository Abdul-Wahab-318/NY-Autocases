import banner from "./../../assets/images/banner.png" ;
import './styles.css'

const MainSection = () => {
  return (
    <>
      <div className="container-fluid px-0 banner-section">

        <div className="row gx-0">

          <div className="position-relative">
            <div className="banner-container">
              <img src={banner} width={'100%'} alt="" />
              <div className="banner-content">
                <div className="container">                  
                <h1>Your road to justice</h1>
                <h4>Accidents happen. Let us <br /> minmize your impact</h4>
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
