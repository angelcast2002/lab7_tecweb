import React from "react"
import Logo from "./Logo"
import "./App.css"
import "./CheckItem.css"
import { Textdesc, Textdescparagraph } from "./Textdesc"
import CheckItem from "./CheckItem"
import InfoCards from "./InfoCards"
import FunButton from "./Button"
import Input from "./Input"
import "./fondo.css"

function App() {
  return (
    <div className="App">
      <div className="fondoup">
        <Logo />
        <Input />
        <Textdesc className="textdesc" text={1} text2={0} />
        <Textdescparagraph className="textdesc" text={1} text2={0} />
        <CheckItem />
        <FunButton className="blue" text="Añadir DuckDuckGo a Chrome" />
        <Textdescparagraph className="textdescpar" text={2} text2={0}/>
        <Textdesc className="textdesc" text={2} text2={0} />
        <svg className="curva" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438 134">
          <path d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z" fill="currentColor" />
        </svg>
      </div>
      <div className="fondodown">
        <InfoCards/>
          <Textdesc className="textdesc" text={3} text2={4} />
        <Textdescparagraph className="textdesc" text={3} text2={4} />
        <FunButton className="green" text="Instalar DuckDuckGo"/>
      </div>
    </div>
  )
}

export default App
