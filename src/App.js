import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./components/HomePage";
// import LoginPage from "./components/LoginPage";

function App() {
  // You can implement routing logic to switch between login and home pages
  return (
    <div>
      <Header />
      <HomePage/>
      {/* or <HomePage /> based on your logic */}
      <Footer />
    </div>
  );
}

export default App;
