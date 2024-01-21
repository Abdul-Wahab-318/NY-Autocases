import './styles.css'
import fb from "./../../assets/images/fb.png"
import footer_logo from "./../../assets/images/footer-logo.png"
import instagram_logo from "./../../assets/images/instagram.png"
import location from "./../../assets/images/location.png"
import email from "./../../assets/images/email.png"
import phone from "./../../assets/images/phone.png"

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: '#1b212f' }}
      >
        <section>
          <div className="container text-center text-md-start pt-[80px]">
            <div className="footer-row row mt-3 mb-5">
              <div className="col-md-7 col-lg-4 col-xl-6 mb-4">
                <h5 className="text-uppercase fw-bold mb-4">
                  About Us
                </h5>
                <p className="fw-bold" style={{ color: '#5b5e63' , maxWidth : '540px' }}>


                The attorneys at NY Auto Cases are devoted to attaining the maximum settlement amounts for our clients. Our areas of expertise and proven success include car accidents, construction accidents, brain injuries, spinal cord injuries, slip and falls, wrongful death, product liability, long-term disability, and medical malpractice. Our well-regarded team of experts understand the nuances of each of these unique types of cases because we have won them all before, and we will ensure your complete care with no fees up front. Please contact us today so we can be the fierce advocates you need in your corner as you take steps to get your life back.
                </p>
                <br />

                <img src={footer_logo} width={'190px'} alt="" />
              </div>

              <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-4">
                <h5 className="text-uppercase fw-bold mb-4">Find us at</h5>

                <div className="fw-bold" style={{ color: '#5b5e63' }}>
                  <ul className='address-list'>
                    <li> <span><img src={location} alt="" /> </span> <span> 45 Rockfeller Plaza #2088,NY 10111</span> </li>
                    <li> <span><img src={location} alt="" /> </span> <span> Jackson Heights , NY 11372</span>  </li>
                    <li> <span><img src={location} alt="" />  </span> <span>Sparkill, NY</span> </li>
                    <li> <span><img src={location} alt="" /></span><span> Buffalo, NY </span> </li>
                  </ul>
                  {/* <h5 className="text-uppercase fw-bold my-4">Reach out to us at</h5>
                  <div className="d-flex align-items-center gap-3 justify-between">
                    <div className='d-flex align-items-center gap-3'>

                        <span><img src={email} width={'18px'} alt="" /></span><span> contact@.com </span>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <span><img src={phone} width={'18px'} alt="" /></span><span> {`(212) 957-3634`} </span>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4 footer-last-col col-lg-2 col-xl-3 mx-auto mb-4 footer-social">
                <h5 className="text-uppercase fw-bold mb-4 footer-social-heading">
                  Social Media
                </h5>
                <div className="social-flex gap-3">
                  <p>
                    <a className="text-white " href="/#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        className="icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                      </svg>
                    </a>
                  </p>
                  <p>
                    <a className="text-white " href="https://www.linkedin.com/">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        className="icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                      </svg>
                    </a>
                  </p>
                  <p>
                    <a className="text-white " href="https://instagram.com/">
                      <img src={instagram_logo} width={'20px'} alt="" />
                    </a>
                  </p>
                    <a className="text-white " href="https://github.com/">
                        <img src={fb} width={'20px'} alt="" />
                    </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="border-bottom" style={{opacity : 0.3}}></div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12 com-sm-12 col-xl-3">
                <p className="fw-bold" style={{ color: '#5b5e63' }}>
                  @copyright 2022 all rights reserved{' '}
                </p>
              </div>
            </div>

            <br />
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
