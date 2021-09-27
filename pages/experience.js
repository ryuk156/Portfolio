import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Seo from "../Components/Seo/Seo";
import Link from "next/link"
import Experience from "../Components/Experience/Experience";

export default function DisplayExperience() {
  return (
    <div className="main-container">
      <Seo />
      <Navbar />
      <Experience />
      <div className="experince-conatiner">
        <Link href={`/`}>
          <div className="more-button">
           <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back 
          </div>
        </Link>
      </div>
    </div>
  );
}
