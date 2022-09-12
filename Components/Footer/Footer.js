import Media from "../../data/socialdetails";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer" style={{ }}>
      <div className="footer-job">
        {/* <div>Currently at</div> */}
        <div className="footer-job-name" title="Currently at">
        {/* <div style={{margin: "6px"}}>
            <span className="indicator online"></span> 
          </div> */}
          <Link href="https://goo.gl/maps/zySFC2L1URhTT16g9">
            <Image
              className="footer-job-name-text"
              src="/images/location.png"
              width={45}
              height={30}
              alt="crescibit"
            />
          </Link>
          <Link href="https://goo.gl/maps/zySFC2L1URhTT16g9">
            <div className="footer-job-name-text">
              <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div style={{fontSize: "18px"}}>
                 London
                </div>
                <div style={{fontSize: "14px"}}>
                 Ontario, CA
                </div>
              </div>
            </div>
          </Link>
         
        </div>
      </div>
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
