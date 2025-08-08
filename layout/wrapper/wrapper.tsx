import ResponsiveAppBar from "../header/header";
import RowAndColumnSpacing from "../footer/footer";
const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <RowAndColumnSpacing />
    </>
  );
};

export default Wrapper;