import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./components/home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
