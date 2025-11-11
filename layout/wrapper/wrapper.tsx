import ResponsiveAppBar from "../header/header";
import RowAndColumnSpacing from "../footer/footer";
import Footer from "../footer/footer";
import Header from "../header/header";
const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Header/>
      {children}
      {/* <RowAndColumnSpacing /> */}
      <Footer/>
    </>
  );
};

export default Wrapper;