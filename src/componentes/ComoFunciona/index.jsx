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
      <FormularioPreencher
        titulo="Preencha o formulário"
        descricao="Tu vai preencher o nosso formulário com algumas informações necessárias e vai enviá-lo para nós."
      />

      <button>Preencher formulário</button>
    </div>
  );
}
export default ComoFunciona;
