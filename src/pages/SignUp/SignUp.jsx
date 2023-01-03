import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function SignUp(){
  return(
    <Container>
      <Background />
      <Form>
        <h1>Notes</h1>
        <p>App to save and manage your asufel links and notes</p>
        <h2>Sign Up</h2>
        <Input 
          placeholder="Name"
          type="password"
          icon={ FiUser }
        />
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
        <Button title="Sign Up" />
        <a href="#">Back to sign in</a>
      </Form>
    </Container>
  )
}