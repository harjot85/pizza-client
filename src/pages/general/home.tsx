import { Home } from "src/components/general/Home/home";
import About from "src/components/general/about/about";
import Categories from "src/components/general/categories/categories";
import Footer from "src/components/general/footer/footer";

const HomePage = () => {
  return (
    <>
      <Home />
      <Categories />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
