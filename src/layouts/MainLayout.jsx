import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/global/Header";
import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";

const MainLayout = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("level") || "Hangman";

  return (
    <>
      <div className="header-and-nav">
        <Header title={title} />
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
