import "./Footer.scss"
import Socials from "@/components/Socials"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Features", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
          link: "https://facebook.com",
        },
        {
          label: "Twitter",
          iconName: "twitter",
          link: "https://twitter.com",
        },
        {
          label: "LinkedIn",
          iconName: "linked-in",
          link: "https://linkedin.com",
        },
      ],
    },
  ]
  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  return (
    <footer className={"footer"}>
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a href={"/"} className="footer__menu-title h6">
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li key={index} className="footer__menu-item">
                      <a href="/" className="footer__menu-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <div className="footer__copyright">
            <p>
              @<time dateTime={"2023"}>2023</time>
              &nbsp;StreamVibe, All Rights Reserved
            </p>
          </div>
          <div className="footer__extra-links">
            {extraLinks.map((link, index) => (
              <a href="/" key={index} className="footer__extra-link">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
