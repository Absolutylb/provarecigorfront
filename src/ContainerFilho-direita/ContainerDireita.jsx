import "./ContainerDireita.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ContainerDireita = () => {
  return (
    <div className="containerDireita">
      <p id="testeGratis">
        <b>Try it free 7 days </b> than $20/mo. thereafter
      </p>
      <form className="formulario">
         <Input 
         type="text" 
         placeholder="First name"
         />
         <Input 
         type="text" 
         placeholder="Last name"       
         />
         <Input 
         type="text" 
         placeholder="Email Address"   
         />
         <Input 
         type="password" 
         placeholder="Password"    
         />
         <Button/>
         <p id="termosdeServico">By clicking the button you are agreeing yo our <strong>Terms and Services</strong></p>
      </form>
    </div>
  );
};

export default ContainerDireita;
