import { Container, Form } from "./styles";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function Profile() {
  return(
    <Container>
      <header>
        <a href="/"></a>
        <FiArrowLeft/>
      </header>
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser} 
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail} 
        />
        <Input
          placeholder="Current password"
          type="password"
          icon={FiLock} 
        />
        <Input
          placeholder="New password"
          type="password"
          icon={FiLock} 
        />
        <Button title="Save"/>
      </Form>
    </Container>
  )
}