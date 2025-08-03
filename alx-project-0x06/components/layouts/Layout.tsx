import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";
import { StoreProvider } from "./store-provider";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <StoreProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </StoreProvider>
    </>
  );
};

export default Layout;
