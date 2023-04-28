import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { Loader } from "@chatscope/chat-ui-kit-react";
import Header from "./sections/Header";
import Body from "./sections/Body";
//

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showParagraph && (
        <div style={{background: "#e0e0e0", height: "100vh"}}>
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
          >
            <img src={logo} style={{ width: "300px" }} alt="logo" />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ margin: "0 5px" }}>جاري تحميل الموقع</div>
            <Loader />
          </div>
        </div>
      )}
      {showTopContent && (
        <div className="top-content">
          <div className="content-wrapper">
            <div className="card-wrapper">
              <Header />
              <Body />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
