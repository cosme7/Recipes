import React from "react";
import {GlobalStyle} from "./Global/GlobalStyle"
import {Header, Footer} from "./Pages/index"
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main/>
      <Footer />
    </>  
  );
}

