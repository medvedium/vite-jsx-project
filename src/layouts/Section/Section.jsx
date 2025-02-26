import "./Section.scss"
import classNames from "classnames"

const Section = (props) => {
  const {
    className,
    children,
    title,
    titleId,
    description,
    actions,
    isActionsHiddenOnMobile,
  } = props

  return (
    <section
      className={classNames(className, "section container")}
      aria-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 id={titleId} className="section__title h3">
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div
            className={classNames("section__actions", {
              "hidden-mobile": isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
