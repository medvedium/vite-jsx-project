import "./CategoryCard.scss"
import { Image } from "minista"
import Icon from "@/components/Icon"

const CategoryCard = (props) => {
  const { title, images = [] } = props

  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((image, index) => (
          <Image src={image} key={index} className={"category-card__image"} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon name={"arrow-right"} className="category-card__icon" />
      </div>
    </a>
  )
}

export default CategoryCard
