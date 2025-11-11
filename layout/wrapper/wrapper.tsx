import ResponsiveAppBar from "../header/header";
import RowAndColumnSpacing from "../footer/footer";
import Footer from "../footer/footer";
import Header from "../header/header";
import { ReactNode } from "react";
interface props {
  children: ReactNode
}
const Wrapper: React.FC<props> = ({ children }) => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Header />
      {children}
      {/* <RowAndColumnSpacing /> */}
      <Footer />
    </>
  );
};

export default Wrapper;