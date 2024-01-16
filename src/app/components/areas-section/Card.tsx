interface CardProps {
  svg: string
}

const Card: React.FC<CardProps> = ({ svg }) => {
  return (
    <img
      src={svg}
      className="h-[120px] w-[120px] sm:h-[200px] sm:w-[200px]  lg:h-[280px] lg:w-[280px] xl:h-[378px] xl:w-[300px]"
    />
  )
}

export default Card
