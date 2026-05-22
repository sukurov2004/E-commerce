import Navbar from "./shared/components/navbar/Navbar";
import Footer from "./shared/components/footer/Footer";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <Navbar />

      <AppRouter />

      <Footer />
    </>
  );
};

export default App;
