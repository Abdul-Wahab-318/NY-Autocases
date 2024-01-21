import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

interface ButtonsProps {
  icon: string;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonsProps> = ({
  backgroundColor = '#2C85DE',
  textColor = 'white',
  icon,
  text,
  onClick
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDisabled(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleClick = () => {
    if (isDisabled) {
      // Log to the console only when the button is clicked in mobile view
      console.log('Button clicked in mobile view');
      if(isMobile){
        // var address="//open?addresses=+16467526097,+12129573634"
        var address="+16467526097"
        const userAgent = navigator.userAgent || navigator.vendor ;
        if (/android/i.test(userAgent)) { 
            window.open(`sms:${address}?body=Hello`);

        } else if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent)) {

            window.open(`sms:${address}&body=Hello`);
        }
        return
      }
    } else {
      // Execute the onClick logic only when not in mobile view
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <div
      className={`connect-lawer-btn ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      <img
        src={icon}
        className=" connect-lawer-btn-circle h-[60px] w-[60px] cursor-pointer sm:h-[50px] sm:w-[50px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[70px] xl:w-[70px]"
        alt="Button Icon"
      />
      <div
        className={`flex h-[50px] w-[170px] cursor-pointer items-center justify-center self-center rounded-full  md:h-[40px] md:w-[180px] lg:w-[250px] xl:h-[63px] xl:w-[316px] ml-3 ${isDisabled ? 'disabled' : ''}`}
        style={{ backgroundColor: backgroundColor }}
      >
        <span
          className="button-text :text-[32px] text-[16px]  md:text-md lg:text-lg xl:text-[32px]"
          style={{ color: textColor }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Button;
