import { socialIcons } from "../data";

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialIcons.map((socialLink) => {
        const { id, href, icon } = socialLink;

        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLink;
