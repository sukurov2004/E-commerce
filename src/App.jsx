import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
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
