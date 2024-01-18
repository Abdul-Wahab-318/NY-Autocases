interface CardProps {
  svg: string
}

const Card: React.FC<CardProps> = ({ svg }) => {
  return (
    <img
      src={svg}
      id="cards"
      className=""
    />
  )
}

export default Card
