import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText/ButtonText"
import { Header } from "../../components/Header/Header"
import { Section } from "../../components/Section/Section"
import { Tag } from "../../components/Tags/Tags"
import { Container, Links } from "./styles"

export default function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://app.rocketseat.com.br</a></li>
          <li><a href="#">https://app.rocketseat.com.br</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}
