import "./Textdesc.css";

function Textdesc(props) {
  return (
    <div className="textdesc">
      <h2>{props.children}</h2>
    </div>
  )
}

function Textdescparagraph(props) {
  return (
    <div className="textdesc">
      <p>{props.children}</p>
    </div>
  )
}

export { Textdesc, Textdescparagraph }
