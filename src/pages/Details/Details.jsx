import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText/ButtonText"
import { Header } from "../../components/Header/Header"
import { Section } from "../../components/Section/Section"
import { Tag } from "../../components/Tags/Tags"
import { Container, Content, Links } from "./styles"

export default function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1> Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe esse soluta repellat tempora aperiam similique libero sequi atque culpa magni veritatis qui necessitatibus, sapiente voluptatem. Deserunt quisquam totam corporis expedita minima ea, consectetur veniam quaerat maiores nisi, distinctio rerum dolor fugiat facere sequi nemo cupiditate mollitia! Explicabo, consequatur dolores? Impedit nostrum laudantium eum, odio sunt excepturi consectetur illo? Earum soluta aliquam quibusdam debitis tempore obcaecati odit amet modi suscipit magni dignissimos ipsam officia animi id, nemo cupiditate corporis sunt sit voluptate repellendus assumenda praesentium magnam aperiam! Qui architecto earum nihil maxime officia, beatae non illo tenetur, exercitationem velit eligendi totam molestias error distinctio doloremque incidunt commodi modi omnis. Quisquam dolores quos hic velit doloribus dignissimos tempora consectetur. Voluptate culpa rerum officiis ullam non minima cum voluptatem praesentium, repudiandae tempore consectetur vitae voluptatum accusamus est, magni in animi soluta voluptas numquam, illum ex excepturi! Blanditiis voluptate consectetur nam est nemo.</p>
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
        </Content>
      </main>
    </Container>
  )
}