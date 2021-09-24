import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({data}) => {
  return (
    <div className="main-container">
      <Navbar />
      <Container content={data}/>
      <Footer />
    </div>
  );
};

export default Layout;
