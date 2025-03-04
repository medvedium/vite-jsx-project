import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    className,
    href,
    type = "button",
    target,
    /*
     * '' (default) | 'transparent' | 'black-06' | 'black-08' | 'black-10'
     * */
    mode = "",
    label,
    isLabelHidden = false,
    iconName,
    /*
     * 'before' | 'after'
     * */
    iconPosition = "before",
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon name={iconName} className="button__icon" hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      aria-label={title}
      title={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
