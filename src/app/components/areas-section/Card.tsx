interface CardProps {
  svg: string ,
  data_aos : string ,
  data_delay : string
}

const Card: React.FC<CardProps> = ({ svg , data_aos  , data_delay }) => {
  return (
    <img
      src={svg}
      data-aos={data_aos}
      data-aos-delay={data_delay}
      id="cards"
      className=""
    />
  )
}

export default Card
