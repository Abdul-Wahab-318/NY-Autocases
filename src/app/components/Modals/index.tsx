/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import horizentalLineSvg from '../../assets/svg/horizentalLine.svg'
import './styles.css'

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

  return (
    <>
      {/* <div className="modal-backdrop" onClick={() => setShowModal(false)}></div> */}

      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          ref={modalEl}
          className="relative mx-auto my-6 w-auto max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl "
        >
          {/*content*/}
          <div className="container2 relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-start self-start rounded-t p-5">
              <div className="flex flex-col">
                <h3 className="flex items-center justify-center self-center text-center text-md font-semibold sm:text-md md:text-md lg:text-lg xl:text-lg">
                  We Will Contact You Soon
                </h3>
                <img
                  src={horizentalLineSvg}
                  style={{
                    width: '4rem',
                    alignSelf: 'center',
                    paddingTop: '1rem'
                  }}
                />
              </div>
            </div>

            {/*body*/}
            <form>
              <div className="px-6">
                <div className="relative flex flex-auto gap-5  pb-4 pt-6">
                  <input
                    placeholder="First Name"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                  <input
                    placeholder="Last Name"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                </div>
                <div className="relative flex flex-auto gap-5 pb-4">
                  <input
                    placeholder="Phone Number"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="text"
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="h-[40px] w-[320px] rounded pl-4"
                  />
                </div>
                <div className="relative flex flex-auto gap-5  pb-4">
                  <input
                    placeholder="City"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="email"
                  />
                  <input
                    placeholder="State"
                    className="h-[40px] w-[320px] rounded pl-4"
                    type="email"
                  />
                </div>
                <div className="flex w-full flex-col gap-y-2 pb-4">
                  <text className="modal-case-type">Case Type*</text>
                  <input className="h-[40px] rounded pl-4" type="email" />
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
                  onClick={() => setShowModal(false)}
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}

export default FreeConsultationModal
