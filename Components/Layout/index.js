import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
};

export default Layout;
