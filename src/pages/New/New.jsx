import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Container, Form } from "./styles";

export default function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="">return</a>
          </header>

          <Input
            placeholder="Title"
          />
        </Form>
      </main>
    </Container>
  )
}