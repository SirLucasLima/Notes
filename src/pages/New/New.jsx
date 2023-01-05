import { Button } from "../../components/Button/Button";
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
            <h1>Create note</h1>
            <a href="">return</a>
          </header>

          <Input placeholder="Title" />
          <TextArea placeholder="Comments"/>

          <Section title="Useful links">
            <NewItem value="https://app.rocketseat.com.br"/>
            <NewItem isNew placeholder="New link"/>
          </Section>

          <Section title="Tag">
            <div className="tags">
              <NewItem value="react"/>
              <NewItem isNew placeholder="New tag"/>
            </div>
          </Section>

          <Button title="Save"/>
        </Form>
      </main>
    </Container>
  )
}