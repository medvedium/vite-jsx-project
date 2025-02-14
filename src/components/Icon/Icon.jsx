import "./icon.scss"
import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"

const Icon = (props) => {
  const { name, className, hasFill = false } = props
  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}

export default Icon
