import "./FormularioPreencher.css";
import formulario from "../images/Boneca-Formulario.svg";

function FormularioPreencher(props) {
  return (
    <div className="formularioPreencher">
      <img src={formulario} alt="" />
      <p>{props.titulo}</p>
      <p>{props.descricao}</p>
    </div>
  );
}

export default FormularioPreencher;
