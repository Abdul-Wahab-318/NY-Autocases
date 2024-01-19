import { ChatSvg } from 'app/assets/svg/chat'
import './styles.css'
import { useEffect , useState , useRef } from 'react'
import menu from "../../assets/images/menu-icon.png" 

const Header = () => {

  const handleClick = () => {
    window.scrollTo({
      top : 0 , 
      left : 0 ,
      behavior : 'smooth'
  })
  }

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleToggle = (): void => {
    setShowMenu((state) => !state);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      } else if (showMenu && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);
  console.log()
  return (
    <>
      <div className="header fixed  top-0 w-full bg-white px-2 py-[8px] sm:px-4 sm:py-[14px] md:px-8 md:py-[18px] lg:px-16 lg:py-[22px] xl:px-24 xl:py-[28px]"
        style={{ zIndex: 1 }}
      >
        <div className="flex justify-between container ">
          <div className="flex items-center justify-center gap-[4px] sm:gap-[12px]" onClick={handleClick} >
            <ChatSvg />
            <span className="hero-title cursor-pointer logo-text justify-center text-center text-xs md:text-md lg:text-lg xl:text-xl">
              NY Auto Cases
            </span>
          </div>

          <div className="hidden md:flex ">
            <div className="navbar flex justify-center px-[6px] py-[7px] gap-4 flex-nowrap ">
              <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
                <a
                  href="#mainSection"
                  className="px-2    
                  
                  xl:text-lg"
                >
                  HOW IT WORKS
                </a>
              </span>
              <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
                <a
                  href="#HowItWorkSection"
                  className="px-2     
                  
                  xl:text-lg"
                >
                  CHAT WITH A LAWYER
                </a>
              </span>
              <span className="nav-button cursor-pointer  rounded-xl border-2 border-transparent transition  delay-75 ease-in hover:rounded-xl hover:border-2 hover:border-[#2b84de]">
                <a
                  href="#areaWeCover"
                  className="px-2    
                  
                  xl:text-lg"
                >
                  AREAS WE COVER
                </a>
              </span>
            </div>
          </div>

          <button className="d-flex d-md-none toggle-menu" ref={buttonRef} onClick={handleToggle}><img src={menu} width={'20px'} alt="" /></button>

        </div>
      </div>
      <header className={`header-mobile ${ showMenu ? "header-mobile-show" : "header-mobile-hide" } `} 
        id="mobileHeader"
        ref={headerRef}
        >
            <div className="mobile-logo-wrapper flex-between">
            <button className=' logo-wrapper d-flex align-items-center gap-2 justify-content-center py-4' onClick={() => { handleToggle() ; handleClick()}}>
              <ChatSvg />
              <span className="hero-title  cursor-pointer logo-text justify-center text-center text-xs md:text-md lg:text-lg xl:text-xl">
                NY Auto Cases
              </span>
            </button>
            </div>
            <nav className="header-mobile-nav pt-4 d-flex flex-column gap-3 pt-5 pl-4">
              <a href="#mainSection" onClick={handleToggle}>HOW IT WORKS</a>
              <a href="#HowItWorksSection " onClick={handleToggle}>CHAT WITH A LAWYER</a>
              <a href="#areaWeCover" onClick={handleToggle}>AREAS WE COVER</a>
            </nav>
        </header>
    </>
  )
}

export default Header
