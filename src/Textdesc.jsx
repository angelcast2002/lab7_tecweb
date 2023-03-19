import React from "react"
import PropTypes from "prop-types"
import "./Textdesc.css"

const textTextDescParagraph = {
    texto1: "No almacenamos información personal. No te persegimos con anuncios. No te rastreamos nunca.",
    texto2: "¡Con la confianza de decenas de millones de personas en todo el mundo!",
    texto3: "Nuestra política de privacidad es simple: No colectamos",
    texto4: "o compartimos ninguna información personal tuya."
}

const textTextDesc = {
    texto1: "¿Cansado de que te rastreen? Podemos ayudarte.",
    texto2: "Protección de la Privacidad para Cualquier Dispositivo",
    texto3: "No guardamos tu información personal.",
    texto4: "Y nunca lo haremos."
}

const Textdesc = ({text, text2}) => {
    const textValor1 = <Text1 valor = {0} text1 = {text} />
    const textValor2 = <Text2 valor = {0} text2 = {text2} />
    return (
        <div className="textdesc">
            <h2>
                {textValor1}
                <br/>
                {textValor2}
            </h2>
        </div>
    )
}

const Textdescparagraph = ({text, text2}) => {
    const textValor1 = <Text1 valor = {1} text1 = {text} />
    const textValor2 = <Text2 valor = {1} text2 = {text2} />
    return (
        <div className="textdesc">
            <p>
                {textValor1}
                <br/>
                {textValor2}
            </p>
        </div>
    )
}

const Text1 = ({ valor, text1 }) => {
  if (valor === 0) {
    if (text1 === 1) {
      return textTextDesc.texto1
    }
    if (text1 === 2) {
      return textTextDesc.texto2
    }
    return textTextDesc.texto3
  }
  if (valor === 1) {
    if (text1 === 1) {
      return textTextDescParagraph.texto1
    }
    if (text1 === 2) {
      return textTextDescParagraph.texto2
    }
    if (text1 === 3) {
      return textTextDescParagraph.texto3
    }
  }
}

const Text2 = ({valor,text2}) => {
    if(valor === 1){
        if (text2 === 4){
            return(
                textTextDescParagraph.texto4
            )
        }
    }
    else{
        return(
            textTextDesc.texto4
        )
    }
}

Textdesc.propTypes = {
  text: PropTypes.number.isRequired,
  text2: PropTypes.number.isRequired
}

Textdescparagraph.propTypes = {
    text: PropTypes.number.isRequired,
    text2: PropTypes.number.isRequired
  }
export { Textdesc, Textdescparagraph }