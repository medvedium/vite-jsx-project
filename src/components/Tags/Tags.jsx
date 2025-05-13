import "./Tags.scss"

const Tags = (props) => {
  const { items = [] } = props
  return (
    <div className={"tags"}>
      <ul className="tags__list">
        {items.map((tag, index) => (
          <li key={index} className="tags__item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
