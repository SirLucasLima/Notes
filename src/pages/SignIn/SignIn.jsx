import { Background, Container, Form } from "./styles";
import { FiMail, FiLock} from "react-icons/fi"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerencias seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={ FiMail }
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={ FiLock }
        />
        <Button title="Entrar" />
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  )
}