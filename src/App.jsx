import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import AuthPage from "./AuthPage";
import LandingPage from "./LandingPage";
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <MainContent />
          <Editor />
          <Footer />
        <AuthPage />
        </div>
      </div>
    </div>
  );
};

export default App;
  