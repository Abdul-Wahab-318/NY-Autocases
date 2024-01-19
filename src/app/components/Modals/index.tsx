/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import horizentalLineSvg from '../../assets/svg/horizentalLine.svg'
import './styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FreeConsultationModal {
  setShowModal: (value: boolean) => void

}

const FreeConsultationModal: React.FC<FreeConsultationModal> = ({
  setShowModal
}) => {
  const modalEl: any = useRef()

  useEffect(() => {
    const handler = (event: any) => {
      if (!modalEl.current) {
        return
      }

      if (!modalEl.current.contains(event.target)) {
        setShowModal(false)
      }
    }
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])


  function sendMessage() {
    var firstName = (document.getElementById('firstName') as HTMLInputElement).value
    var lastName = (document.getElementById('lastName') as HTMLInputElement).value
    var phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement).value
    var email = (document.getElementById('email') as HTMLInputElement).value
    var state = (document.getElementById('state') as HTMLInputElement).value
    var city = (document.getElementById('city') as HTMLInputElement).value
    var caseType = (document.getElementById('caseType') as HTMLInputElement).value
    var message = (document.getElementById('message') as HTMLInputElement).value
    var yes = (document.getElementById('Yes') as HTMLInputElement).value
    var no = (document.getElementById('No') as HTMLInputElement).value


    if (firstName == '') {
      toast.error("First name is required!")
      // alert('First name is required')
      return
    }
    if (lastName == '') {
      toast.error('Last name is required')
      return
    }
    if (phoneNumber == '') {
      toast.error('Phone Number is required')
      return
    }
    if (state == '') {
      toast.error('State is required')
      return
    }
    if (message == '') {
      toast.error('Message is required')
      return
    }
    var textMessage = `
    From: ${firstName} ${lastName}
    PhoneNumber:${phoneNumber}
    Email:${email}
    state:${city} - ${state}
    Case Type:${caseType}
    New Matter:${yes ? yes : no}
    Message:${message} `

    // console.log(textMessage)

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "App 5fb181612e8dec02189fd9cd8e19dd1f-c73ccc6d-63ac-4164-b3d1-284e8b03ee56");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
      "messages": [
        {
          "destinations": [
            { "to": "16467526097" },
            { "to": "12129573634" },
            { "to": "15083619253" }
          ],
          "from": "ServiceSMS",
          "text": textMessage
        }
      ]
    });

    var options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    fetch("https://1vrmnk.api.infobip.com/sms/2/text/advanced",
      options)
      .then((response) => {
        // response.text()
        toast.success("We have received your request and will contact you soon. Thank you")
        // setShowModal(false)
      })
      .then(result => {
        console.log('result', result)
        // toast.success("We have received your request and will contact you soon. Thank you")
        // setShowModal(false)
      })
      .catch(error => console.log('error', error));

    // setShowModal(false)
  }

  return (
    <>
      {/* <div className="modal-backdrop" onClick={() => setShowModal(false)}></div> */}

      <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          ref={modalEl}
          className="relative mx-auto my-6 w-auto max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[900px] "
        >
          {/*content*/}
          <div className="container2 modal-wrapper relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="modal-header-top px-6">
              <h2>We will contact you soon</h2>
            </div>

            {/*body*/}
            <form>
              <div className="px-6">
                <div className="relative flex flex-auto gap-4  pb-4 pt-6">
                  <input
                    id="firstName"
                    placeholder="First Name"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                  <input
                    id="lastName"
                    placeholder="Last Name"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                </div>
                <div className="relative flex flex-auto gap-4 pb-4">
                  <input
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                  <input
                    id="email"
                    placeholder="Email"
                    type="email"
                    className="h-[40px] w-[320px] rounded pl-4"
                  />
                </div>
                <div className="relative flex flex-auto gap-4  pb-4">
                  <input
                    id="city"
                    placeholder="City"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="email"
                  />
                  <input
                    id="state"
                    placeholder="State"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="email"
                  />
                </div>
                <div className="flex w-full flex-col gap-y-2 pb-4">
                  <text className="modal-case-type">Case Type*</text>
                  <input className="h-[40px] rounded pl-4" id="caseType" type="text" />
                </div>
                <div className="flex w-full flex-col gap-y-2">
                  <text className="modal-case-type">
                    Are you inquiring about a new matter?*
                  </text>
                  <div className="flex gap-1">
                    <input type="radio" id="Yes" value="Yes" name="inquiring" />
                    <label
                      htmlFor="Yes"
                      style={{
                        fontSize: '12px',
                        color: '#5E5E5E',
                        fontFamily: 'Avenir'
                      }}
                    >
                      Yes
                    </label>
                    <input type="radio" id="No" value="No" name="inquiring" />
                    <label
                      htmlFor="No"
                      style={{
                        fontSize: '12px',
                        color: '#5E5E5E',
                        fontFamily: 'Avenir'
                      }}
                    >
                      No
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <textarea
                    id="message"
                    className="card-textarea rounded pl-4 pt-1"
                    placeholder="Message"
                    style={{ minWidth: '100%' }}
                    rows={3}
                  />
                </div>
              </div>
              {/*footer*/}
              <div className="border-blueGray-200 flex items-center justify-center rounded-b border-t border-solid p-6">
                <button
                  className="mb-1 mr-1 rounded-full bg-[#2C85DE] px-12   py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#2c85deb0]"
                  type="button"
                  onClick={() => sendMessage()}
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      <ToastContainer />
    </>
  )
}

export default FreeConsultationModal
