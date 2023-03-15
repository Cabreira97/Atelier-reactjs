import FormularioPreencher from "../FormularioPreencher";
import "./ComoFunciona.css";

function ComoFunciona() {
  return (
    <div className="comoFunciona">
      <h1>Como Funciona</h1>
      <p>
        Dê uma olhada no passo-a-passo que deixamos para você entender como
        pedir a melhor peça sob medida!
      </p>
      <FormularioPreencher />

      <button>Preencher formulário</button>
    </div>
  );
}
export default ComoFunciona;
