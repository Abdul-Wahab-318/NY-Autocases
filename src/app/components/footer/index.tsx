// import MapSvg from 'app/assets/svg/map.svg'
import ChatSvg from 'app/assets/svg/chat.svg'

import './styles.css'

const Footer = () => {
  return (
    <>

    <footer className="text-center text-lg-start" style={{backgroundColor: '#1b212f'}} >

    <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
    
       
     
        <div>
            <a href="" className="me-4 link-secondary">
                <i className="oi oi-audio"></i>
            </a>
         
        </div>
    </section>
    <section >
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 text-secondary"></i>About Us
                    </h5>
                    <p className="fw-bold" style={{color: '#5b5e63'}}>
                        Haven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open
                    </p>
                    <br/>

                    <div className="row">
                        <div className="col-md-2 ">   
                              <img height="42" className='img-f' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABRCAYAAACws6q4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAANWklEQVR4nO2debRVVR3HP/e9C8gkpIBoiHrQVLaSpVnYbCpqatngUFYOkQPOuKyTFanYRm2pmabmcso5hzIUB1TMnFAw0Y6r1LYjOLAQZND0Pe7tj+8+cN995953z333vnsf8F3rLOCeaZ/f+e3f8P399iFDE8JYNxDYBNgUGNzg4aRBG7AQeBVYGIVBPumgTI8OqQyMdRlgKPA54BBgG2A40L+R40qJlcBS4BVgFnAT8HoUBu2FBzWT0EcBpwA/AD5GE42tCuTRC3gamAI8GIXBR/HOlkaNqhDGug0ACxwLbEDvFjho/FlgZ+CPwJ7FOxsKb1Z+DxxO7zIllSIPvAAcEoXBHNDbaDQ+DewHrJewL4emaaJDakK0AK10VOYMsDlwsLFuXhQGbQ0VurGuFTgMRSqFA80DC4C7gf8C7Z3PbkoMAb4CfAboV/B7X2Bf4GLANVrTBwOfR9oRIw8sA04HrovC4INGDKwaeFNpgN8Ce7BakTLAKGAc4BrtSIcBIxJ+vw+4tTcJHMDH5RFwFfC/ot39gK2NdZlGC72V5AjqDaBXCTyGF/ybwEcJuwcCDRd6KeQaPYBuIkey889Ak8TpaxvWCb0BWCf0BmCd0BuAZhZ6wymKeqGZhb7GotEZaVUw1g1ABY5hrKYMFhTSpyXOyyCOfhQwCHHfr0dhsKiC8zZkdVFlOfAasKhUoaIcmlnonR7GP/wWwBHABCS8HGLxbjPW3RaFwYKkixnr1gN2R3z9jkh4i4HZxrprgIejMGhLOK8foiqO9OcNQS9rNnCNse7htJlzw4TuBZgWIxDv/m1kGuNrjETc9abGutOjMFhRdK8WxGlf4o+NMRzYCr2Mbxjr5kRhUJyYfQ043x8X328Yevk7AycAd6V5iEShe4EMAcYC2yPatR6ObRgwIOH3ccCxxrpCdjEDjAf2pyNBFu/rj7RxsLHuNmAO8J6f/lsDFwAbJdwr438/H73Mt+IdxrrRwJl0FHjheQEw1Vj3XBQGr3X5tB6dhG6s2wJNwT38YAck3LBWyNCRAo1/+zLwBTqamAwSdrnZORhRxd8FHHCfse4GZBY2pvRzZIAdgG0pELofxxZdnDcaaXx6oRvr+gA7AdNQYWFgmZvVG338lhbxS+yHyn5jkfK8WcH1+gMbG+taCkzMZiQXVwrRFxhtrMtU6lSzsMrmfQq4FNiONSOUzCDF2Qk5264UaCViNgsFt9z/Xg45YEUXx3RALNxNgLOQLV0TBF6I2Cx1hfnA80Xa+g/gHcqXCxcDc9KEjlljXRY5kC+VOKYdNdH0FmRJb5o+BM4FXi76/VngehShrJ9w3gfAtcAzaQc4AoVThQON+zbim75J7+C4W1Ak8i0U6RQ73TZkCtZHM2Al8DpwHXB9cXIVhUGbse5i9OxHIGfc4v/9JqoQXRKFQVcmqAOyKMv6BJ0Lwy8ARwFzE2LXpoX3TzOAW1C9stC0fIhqrwNRhjkfJTlzojAoLq8BEIXB28a6c4C/o+6zjZDAHweejsJgedoxZpGXL5467cCMKAyeSnvBRiMKg5yx7iXgDhRfF/bS9EfKdLc/tiI7HIXB+8AsY91Dac4rhSwdM7sY7YjP6K3IIy1OmvbrQ3WC666wY5RLNGrW4OOd9XhkU+f1UJU/T/IzNDw66ynuZRfkrPoBVxrrrgBeTuuAUqJpu8Lq/tY9j3M4IpqGA5OBW1GbWTEFsFag7kL3dvACFHq+i0LTcSj7vcdYd6CxblC9x9FMqLt5MdYNQX189wFzgQMQuTQIJWRjgfGemHq2VOi2JqGumu4bRPdGJmUaMAb4DWqkfBUlGSOAo4ErgCONdSOTr7bmoN7mZRRwKgrTRgPHo170Z4AfAfcgUimLEplzgIt9tLPGom5CN9b1B45BRZA4D2hB2n4F8Cuk8fsD81BMnUMEU6/JgMsgidXMQ51suo9Y9gYOJrnKMxAVCLYF/oLW5YxBlaTLexPtUAxPQ2xF5+IMaFbn6zWNN0EVnI+XOSbrj5uIZsAUYFkPONIM0GqsW5k2w/TKVI6X74MCg4NRcSNGHrVOvxiFQd2EHrN8lVaeHgUWFy/9qwMywNeRMrziK/lvdXFOHBBsB3wW1Y5LmY4RaCXGDnQ23QuQGa2defHOb3tU4poN3I7sdbnVcjmUKN1Bz9jxFuAgv7UDjxvrjkehaqLWe+2egHjzoVSmSMXHtAG3ofWlNXWk2/mBXQP8EpiJOOgHSW6Qz/lBTENFlOOMdZtX2ZqRBrGJ6IPoiQsRtV0KQ4FD0drWmBzsaitEDngeuDr2VTURunce45CWDwb2An6HNORMVAr8N+KzY7wPXI40LkTx+3TgNGPdmB6iCLJ4XshYZ/xzFGMAnReiVYocWg4zBfhP/GNNhO7f4AMoBn+P1b0khwF/QOn/scCNrC72PoJIsF2Qje2PYvUQFSAmGetGlhBEJSglpGIzkkVF+fOBMSVmWrlrJW05NLufBE4C7ik0XzUzL1EYzAd+gbql/gosQWHTWOA84GcoGZqI7PjZURi8AfwJVXNe8wMegBzR2f74E7zwa2F28kgYxYJvBXZDHWA7VnitdtRet6RgW4T6bWagLHxCFAYPFJcBa5oceY2fC/wEmAQ8jExKFvgqMjl7oaXbj/tz2lCSdBSKYtpZvcx7HHAGiuUnGutGd0PzQcK+Bq3ZL3bcGeCLwNnGuh0quM5TiEfap2Db028/BC6NwmBp0sk1Dxn9NFpkrLvZD+z7fhCjUEj1PeScnkOf6SAKgw+MdTNR7fEYFF0MQkoxCIVqY5HDvdZYdy/qmE0b8eSRWbsBveit6SiDvkjw5xvrDqN819ZiYHYUBu+lHEP9aIAoDHJRGLyEHOm+SFuX+N3LKVpnGYXByigM5iF+5gxUpY+XqGcQf7M7miW3ABM8g5kWK1E/y3HIuRe/uD6I/bwRvZSaR1M9wafnojB4Hvgx8E1k96dEYbCsxPEfIjP0HeScC6tLcaNoLJTpxroDqiDI8sj0HY1mXDFaUH/iZci51xRVm5cqHNsKNLVnkxy3r0IUBu3GurmoC/dQpP2FiUncVbwL+hjPlsa6C9O0Q0RhsNJY9ziKqi5CiV2hEraglotpJHf7Vo3UQvfC/iTqqq12piwz1t0ZhcHCUgd43/CKse48FOOeiART2FLRikiyE4B/GeumV8CnrFIWL/jZyI9cjBK8QpnEVa6aohpN74tqnpOo3t4tAd4w1t3flZCiMFhqrLsJRUWTkTONs0P8GIajkG8mKZe3++jpMWPdZFRWHEtHZrTmJjjVBb2W74oyzUpT4qRtMAoRN63kvlEY5KMweAGZgqNQLByTY3n/97fpxidKojB40F//OercSZD2LbagDGtMN++bRfH6QWl8g9fK21HP+SQU+s0AfgpclrRmKCUeRabmn9SRgEtrXnLAzf7PAXRPIxYAD6XltH1s/rKx7mqU2bYCS33U0y14Gz8H+Ygr0fKWStqsUyGV0KMwyBvrrkXpedzlW63g30dpc1XwqfW71Z5f5rptxrrH0Ew6FznXJMFXrXBZktvPWijxQvzDzq/2hj2ILMmLs7rsKvOzaaax7iREhBWHk9CNnv0WlBkWXyALbN+Lq/KtKNQrXhywknQLbh9CznUuHW18u/+tqp7MLFpNthC1vcWa0YqIm8ONddch0qrkQKspJHeTuCqH9dDY96Oz0BfSebVFSXhz+ihKzi5AGp8D7kffFyub5JVCFjm0Z5DtKsz4hqPiw64oHCsl9HZj3ZPArHLJDqwKOUcioRhqT7hlULK0m/+z8MXmUFTyTpoLesE/iZZ5jkfZ9CN0w8RmUdHheqQZQwv2xQ9wIF07jWXAVca6U7t4+5uglHsCXS8V7A6SwtBlqN8m9coJP5Nf9Fu30eLt2xOoobOUc6gk2dmXMvG7sW5LVMzYh9UrsOu1FeMjFOre3ww9NS2gVBtp4A0olEsbDmUQ771h0k5j3WaoZW5fkqOKeiGPnN10YGopZrOnscqmRmEw31h3IiLn90emIK2AOjhHb8NHoY9D7k1y11O90I6ChLuAaVEYvN6D9y6LDo4sCoMlxrpTUJFgIrK9Sb0eWTp/UzYJQ4GpiEcvdpoxZ1Lr1RjxF0xnoaL4E9VGGfVCp+jBL0l5zFj3BEr1B9LxKxhZlCZPKndhY9026DMh+9A5o8sjp3QaindrRTDFheflwIpmsN9JKBmy+QEvp8jb+4SpbF3QC/zXKDRM0vAXUQVpei04k96Gmmec/ov/UxGLWBwW5lBycjpwR7NN+55CLYUeNxgdg6KUvkX78ygxOQv4cw80izYtain0IaigPIJkVu414MgoDO6t4T17JWop9L505G8K8QpwMiKQ1nrUg/soRA71r0xG3xpY65xmEupJ3ebRd9BPA/62NtvwYtSLXs2jKOUXwI3rBN4R9dL0F4Cfozi8KROURqLWQs+jumWIbHhv+gxVj6EaoRf2eBc6zngN6ETg3nUCL41qbHoO8e+Fvdd5FIefzDoN7xJV8dr+q84TUXPnMNRreBFw5zqn2TWqLiYY6/qiVWnD0f+6tWCdwCvD/wE/yzP9AV7alwAAAABJRU5ErkJggg=="/>
                         </div>

                         <div className="col-md-6">
                            <h3 className="" style={{color:'white'}}>
    
                                NY AUTO CASES
                            </h3>
                         </div>

                        
                    </div>



                </div>
                
               
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">
                        Contact Info
                    </h5>

                    <div className="fw-bold" style={{color: '#5b5e63'}}>
                        <p>
                            Address:Your address goes here.your demo address            
                        </p>
                        <p>
                            Phone : +8880 44338899
                        </p>
                        <p>
                            info@domain.com    
                        </p>
                    </div>

                   
                   
                </div>
                {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                   
                    <h5 className="text-uppercase fw-bold mb-4">
                        Important Link
                    </h5>
                  
                    <div className="fw-bold"style={{color: '#5b5e63'}}>
                        <p>
                            WHMCS-bridge
                        </p>
                        <p>
                            Search Domain
                        </p>
                        <p>
                            My Account
                        </p>
                        <p>
                            Shopping Cart
                        </p>
                        <p>
                            Our Shop
                        </p>
                    </div>

                </div> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-social">
                  
                    <h5 className="text-uppercase fw-bold mb-4 footer-social-heading">Social Media</h5>
                    <div className='social-flex'>
<p><a className="text-white " href="/#">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg></a></p>
                        <p>
                        <a className="text-white " href="https://www.linkedin.com/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></a>
                        </p>
                        <p>
                        <a className="text-white " href="https://github.com/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                        </p>
                    </div>
                
                </div>
            </div>

            <div className="row">
                <div className="border-bottom"></div>
            </div>
                <br/>
            <div className="row">
                <div className="col-md-12 com-sm-12 col-xl-3">
                    <p className="fw-bold" style={{color: '#5b5e63'}}>@copyright 2022 ALL RIGHTS RESERVED  </p>
                </div>
            </div>
            
                <br/>
        </div>


    </section>
</footer>
</>
  )
}

export default Footer
