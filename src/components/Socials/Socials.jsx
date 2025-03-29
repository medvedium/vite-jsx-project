import "./Socials.scss"
import classNames from "classnames"
import Button from "@/components/Button"

const Socials = (props) => {
  const { className, links = [] } = props
  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links?.map(({ label, iconName, link }, index) => (
          <li key={index} className="soc1als__item">
            <Button
              className="soc1als__link"
              href={link}
              mode={"black-10"}
              target={"_blank"}
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
