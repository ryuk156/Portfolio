import Media from "../../data/socialdetails";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        {Media.map((icons, index) => {
          const name = "fa fa-" + `${icons.name}`;
          return (
            <div key={index} className="icon">
              <Link href={icons.link}>
                <i className={name} aria-hidden="true"></i>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
