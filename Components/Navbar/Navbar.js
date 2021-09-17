/* eslint-disable @next/next/no-img-element */
import ThemeManager from "../ThemeManager/ThemeManager";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-brand">
        <img
          src="/images/me.png"
          alt="Picture of the author"
          className="nav-brand-profile"
        />
        <div className="nav-brand-name">
          <div className="nav-name">🇮🇳 Yash Patel</div>
          <div> [ UTC +05:30 ]</div>
        </div>
      </div>
      <div className="nav-theme-switcher">
        <ThemeManager />
      </div>
    </div>
  );
};

export default Navbar;
