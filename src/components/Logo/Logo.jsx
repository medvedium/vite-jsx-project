import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
  const { className, loading = "lazy" } = props
  const title = "Home"
  return (
    <a
      href="/"
      className={classNames(className, "logo")}
      title={title}
      aria-label={title}
    >
      <img
        className={"logo__image"}
        src="/logo.svg"
        alt="Logo"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo
