import React from "react"
import "./Input.css"

const Input = () => (
  <div>
    <form className="search_form">
      <input
        className="search_input"
        placeholder="Busca en la red sin que te rastreen"
        type="text"
        tabIndex={-2}
      />
      <input className="search_button" type="submit" tabIndex={-1} />
    </form>
  </div>
)

export default Input
