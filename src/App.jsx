import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Alanı */}
      <header>
        <TopBar />
        <Navbar />
      </header>

      {/* Ana İçerik Sayfası */}
      <div className="flex-grow">
        <Home />
      </div>

      {/* Footer Alanı */}
      <Footer />
    </div>
  );
}

export default App;