import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { NewItem } from "../../components/NewItem/NewItem";
import { Section } from "../../components/Section/Section";
import { TextArea } from "../../components/TextArea/TextArea";
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

          <Input placeholder="Title" />
          <TextArea placeholder="Comments"/>

          <Section title="Useful links">
            <NewItem value="https://app.rocketseat.com.br/node/stage-09/group/desenvolvendo-aplicacao/lesson/estilizando-o-note-item-1"/>
            <NewItem isNew placeholder="New link"/>
          </Section>
        </Form>
      </main>
    </Container>
  )
}