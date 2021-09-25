import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Seo from "../Seo/Seo";

const Layout = ({data}) => {
  return (
    <div className="main-container">
      <Seo />
      <Navbar />
      <Container content={data}/>
      <Footer />
    </div>
  );
};

export default Layout;
