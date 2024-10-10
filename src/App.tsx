import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import PopupForm from "./components/shared/PopupForm";
import { Toaster } from "./components/ui/toaster";
function App() {
  return (
    <>
      <h1 className="w-full font-Lato relative">
        <Header />
        <Outlet />
        <PopupForm />
        <Footer />
        <Toaster />
      </h1>
    </>
  );
}

export default App;
