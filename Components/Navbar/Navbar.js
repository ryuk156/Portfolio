import ThemeManager from "../ThemeManager/ThemeManager";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-brand">
        <Image
          src="/images/me.png"
          alt="Picture of the author"
          className="nav-brand-profile"
          width={48}
          height={48}
        />
        <div className="nav-brand-name">
          <div className="nav-name">Yash Patel</div>
          <div>🇮🇳 [ UTC +05:30 ]</div>
        </div>
      </div>
      <div className="nav-theme-switcher">
        <ThemeManager />
      </div>
    </div>
  );
};

export default Navbar;
