import React from "react"
import Hero from "./screens/hero/Index"
import {GlobalStyle} from "./globals"

function App() : JSX.Element {
  return (
      <div className="container">
        <GlobalStyle/>
      <Hero/>
      </div>
  );
}

export default App;
