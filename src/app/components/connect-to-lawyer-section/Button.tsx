interface ButtonsProps {
  icon: string
  text: string
  backgroundColor?: string
  textColor?: string
  onClick?: () => void
}

const Button: React.FC<ButtonsProps> = ({
  backgroundColor = '#2C85DE',
  textColor = 'white',
  icon,
  text,
  onClick
}) => {
  return (
    <div
      className="flex items-center justify-center gap-1 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6"
      onClick={onClick}
    >
      <img
        src={icon}
        className="h-[30px] w-[30px] cursor-pointer sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[70px] xl:w-[70px]"
      />
      <div
        className="flex h-[26px] w-[140px] cursor-pointer items-center justify-center self-center rounded-full  sm:h-[30px]  sm:w-[140px] md:h-[40px]  md:w-[180px] lg:w-[250px]  xl:h-[63px] xl:w-[316px]"
        style={{ backgroundColor: backgroundColor }}
      >
        <text
          className="button-text :text-[32px] text-xs sm:text-sm md:text-md lg:text-lg xl:text-[32px]"
          style={{ color: textColor }}
        >
          {text}
        </text>
      </div>
    </div>
  )
}

export default Button
