import React from 'react'

interface AvatarProps {
  AvatarSrc: () => JSX.Element
  sectionNumber: string
  sectionText: string
  sectionSubText?: string
}

const Avatar: React.FC<AvatarProps> = ({
  AvatarSrc,
  sectionNumber,
  sectionText,
  sectionSubText
}) => {
  return (
    <div className="sm: h-[200px] md:h-full">
      <AvatarSrc />
      <div className="container flex items-center justify-center">
        <span className="section-number block text-sm sm:text-md md:text-lg lg:text-xl xl:text-[48px]">
          {sectionNumber}
        </span>
        <span className="section-text text-xs sm:text-sm md:text-sm lg:text-md xl:text-[27px]">
          {sectionText}
          {sectionSubText && (
            <span style={{ fontWeight: 700 }}>{sectionSubText}</span>
          )}
        </span>
      </div>
    </div>
  )
}

export default Avatar
